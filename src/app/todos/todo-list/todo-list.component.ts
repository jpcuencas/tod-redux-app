import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.models';
import { AppState } from '../../app.reducer';
import { Filtros } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  todos: Todo[] = [];

  filtroActual: Filtros;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('todos')
    .subscribe( todos => {
      //this.todos = todos;
      console.log(todos);
    });

    this.store
    .subscribe( ({todos, filtro}) => {
      this.todos = todos;
      this.filtroActual = filtro;
    });

  }

}
