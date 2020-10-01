import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filter/filter.actions';
import { eraseAll } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {


  filtroActual: actions.Filtros = 'Todos';

  pendientes = 0;

  filtros: actions.Filtros[] = ['Todos', 'Pendientes', 'Completados'];

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.select('filtro').subscribe(
      filtro => {
        console.log(filtro);
      }
    );
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado).length;
    });
  }

  cambiarFiltro( filtro: actions.Filtros): void {

    console.log(filtro);

    this.store.dispatch(actions.setFilter({filtro: filtro}));
  }

  limpiarCompletados(): void {
    this.store.dispatch(eraseAll());
  }
}

