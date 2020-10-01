import { createAction, props } from '@ngrx/store';

export const crear = createAction('[TODO] crear', props<{ texto: string }>());

export const toggleCheck = createAction('[TODO] toggle Todo', props<{ id: number }>());
export const editar = createAction('[TODO] editar Todo', props<{ id: number, texto: string }>());
export const borrar = createAction('[TODO] borrar Todo', props<{ id: number }>());
export const toggleAll = createAction('[TODO] toggle all Todos', props<{ completado: boolean }>());
export const eraseAll = createAction('[TODO] erase all Todos');
