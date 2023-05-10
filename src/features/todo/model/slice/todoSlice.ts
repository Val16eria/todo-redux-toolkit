import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface ITodo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

interface TodoSlice {
	list: ITodo[];
	loading: boolean;
	error: null | string
}

const initialState: TodoSlice = {
	list: [],
	loading: false,
	error: null,
}

export const getTodos = createAsyncThunk('todos/getTodos',
	async (data, thunkApi) => {
		try {
			const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5');
			return response.data;
		}
		catch (error: any) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		// setLoading: (state, { payload }: PayloadAction<boolean>) => {
		// 	state.loading = payload
		// },
		// setErrors: (state, { payload }: PayloadAction<string>) => {
		// 	state.error = payload
		// },
		setToggle: (state, { payload }: PayloadAction<number>) => {
			state.list = state.list.map((el) => (
				{ ...el, completed: el.id === payload ? !el.completed : el.completed }
			))
		}
	},
	extraReducers (builder) {
		builder.addCase(getTodos.pending, (state, action) => {
			state.loading = true;
		}).addCase(getTodos.fulfilled, (state, action: PayloadAction<ITodo[]>) => {
			state.loading = false;
			state.list = action.payload;
		}).addCase(getTodos.rejected, (state, action: PayloadAction<any>) => {
			state.loading = false;
			state.error = action.payload;
		})
	}
});

export const { setToggle } = todoSlice.actions;
export default todoSlice.reducer;
