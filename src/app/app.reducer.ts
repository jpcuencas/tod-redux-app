import { ActionReducerMap } from '@ngrx/store';

import { Todo } from './todos/models/todo.models';
import { todoReducer } from './todos/todo.reducer';
import { Filtros } from './filter/filter.actions';
import { filtroReducer } from './filter/filter.reducer';


export interface AppState {
  todos: Todo[],
  filtro: Filtros
}

export const AppReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
};
