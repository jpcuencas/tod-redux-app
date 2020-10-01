import { createReducer, on } from '@ngrx/store';
import * as actions from './filter.actions';

export const initialState: actions.Filtros = 'Todos';

const _filtroReducer = createReducer(
  initialState,
  on(actions.setFilter, (state, props) => props.filtro),
);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}
