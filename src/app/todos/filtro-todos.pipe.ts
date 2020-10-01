import { Pipe, PipeTransform } from '@angular/core';
import { Filtros } from '../filter/filter.actions';
import { Todo } from './models/todo.models';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroTodosPipe implements PipeTransform {

  transform(todos: Todo[], filtro: Filtros): Todo[] {
    console.log(todos);
    switch(filtro) {
      case 'Completados':
        return todos.filter( todo => todo.completado );
      case 'Pendientes':
        return todos.filter( todo => !todo.completado );
      default:
        return todos;
    }
  }

}
