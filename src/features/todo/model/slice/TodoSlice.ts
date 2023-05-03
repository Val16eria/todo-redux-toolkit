import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITodo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

type TodoSlice = {
	list: ITodo[];
}

const initialState: TodoSlice = {
	list: [],
}

const todoSlice = createSlice({
	name: 'todos',
	initialState: initialState,
	reducers: {
		todosRequest(state, action: PayloadAction<string>) {
			state.list.push({
				title: action.payload,
				userId: 0,
				id: 0,
				completed: false
			});
		},
		toggleTodo(state, action: PayloadAction<number>) {
			const toggleTodo = state.list.find(todo => todo.id === action.payload);
			if (toggleTodo)
				toggleTodo.completed = !toggleTodo.completed;
		}
	}
});

export const { todosRequest, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
