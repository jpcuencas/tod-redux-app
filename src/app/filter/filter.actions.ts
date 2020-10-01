import { createAction, props } from '@ngrx/store';

export type Filtros = 'Todos' | 'Completados' | 'Pendientes';

export const setFilter = createAction('[Filter] set Filter', props<{ filtro: Filtros }>());
