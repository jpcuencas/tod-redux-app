import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.models';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
@ViewChild('inputFisico') txtInpurFisico: ElementRef;

  chkCompletado: FormControl;
  txtInput: FormControl;
  editando = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe( valor => {
      console.log(valor);
      this.store.dispatch(actions.toggleCheck({ id: this.todo.id }));
    });
  }

  editar(): void {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => { this.txtInpurFisico.nativeElement.select(); }, 1);

  }

  guardarEdicion(): void {
    this.editando = false;
    if (this.txtInput.valid
      || this.txtInput.value !== this.todo.texto) {
      this.store.dispatch(
        actions.editar({
          id: this.todo.id,
          texto: this.txtInput.value
        })
        );
    }
  }

  borrar(): void {
    this.store.dispatch(
      actions.borrar({ id: this.todo.id }));
  }

}
