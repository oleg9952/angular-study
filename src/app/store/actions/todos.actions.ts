import { createAction, props } from '@ngrx/store';
import { Todo } from '../reducers/todos.reducer';

export const addTodo = createAction('[[Add Todo Component] addTodo', props<{todo: Todo}>());
export const delEnterAnim = createAction('[[Todo Component] delEnterAnim', props<{id: number}>());
export const markDone = createAction('[[Todo Component] markDone', props<{id: number}>());
export const delTodo = createAction('[[Todo Component] delTodo', props<{id: number}>());