import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.models';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Test 1'),
  new Todo('Test 2'),
  new Todo('Test 3'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.crear, (state, props) => [...state, new Todo(props.texto)]), // no usamops push para evitar la mutacion del estado
  on(actions.toggleCheck, (state, { id }) => {
// map regresa un nuevo array (asi no se muta el estado)
    return state.map( todo => {

      // crear un nuevo objeto para no modificar el state
      // con las propiedades de antes cambiando el completado
      if ( todo.id === id ) {
        return  {
          ...todo,
          completado: !todo.completado
        };
    } else {
      return todo;
    }
    });
  }),
  on(actions.editar, (state, props) => {

    return state.map( todo => {
      // crear un nuevo objeto para no modificar el state
      // con las propiedades de antes cambiando el completado
      if ( todo.id === props.id ) {
        return  {
          ...todo,
          texto: props.texto
        };
    } else {
      return todo;
    }
    });
  }),
  on(actions.borrar, (state, { id }) => {
      // filter regresa un nuevo array (asi no se muta el estado)
   return state.filter( todo => todo.id !== id);
  }),
  on(actions.toggleAll, ((state, props)  => {
          // map regresa un nuevo array (asi no se muta el estado)
              return state.map( todo => {
                // crear un nuevo objeto para no modificar el state
                  return  {
                    ...todo,
                    completado: props.completado
                  };
        });
      }
    )),
   on(actions.eraseAll, (state) => {
     return state.filter( todo => !todo.completado );
   }),
);
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
