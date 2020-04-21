import { createReducer, on } from '@ngrx/store';
import { addTodo, delEnterAnim, markDone, delTodo } from '../actions/todos.actions';

export interface StateInterface {
    todos: Array<Todo>;
}

export interface Todo {
    id?: number;
    message: string;
    status: boolean;
    animateAdd: boolean;
    animateDel: boolean;
}

export const initState: StateInterface = {
    todos: [
        {
            id: 1,
            message: 'Todo one...',
            status: false,
            animateAdd: false,
            animateDel: false
        },
        {
            id: 2,
            message: 'Todo two...',
            status: false,
            animateAdd: false,
            animateDel: false
        },
        {
            id: 3,
            message: 'Todo three...',
            status: false,
            animateAdd: false,
            animateDel: false
        }
    ]
};

const __todosReducer = createReducer(initState,
    on(addTodo, (state, payload) => {
        return {
            ...state,
            todos: [...state.todos, payload.todo]
        };
    }),
    on(markDone, (state, payload) => {
        return {
            ...state,
            todos: state.todos.map((todo: Todo) => {
                return <Todo>{
                    ...todo,
                    status: todo.id === payload.id ? !todo.status : todo.status
                };
            })
        };
    }),
    on(delEnterAnim, (state, payload) => {
        return {
            ...state,
            todos: state.todos.map((todo: Todo) => {
                return <Todo>{
                    ...todo,
                    animateAdd: todo.id === payload.id ? !todo.animateAdd : todo.animateAdd
                };
            })
        };
    }),
    on(delTodo, (state, payload) => {
        console.log(`delTodo: ${payload.id}`);
        return {
            ...state,
            todos: state.todos.filter((todo: Todo) => todo.id !== payload.id)
        };;
    })
)

export function todosReducer(state, action) {
    return __todosReducer(state, action)
}