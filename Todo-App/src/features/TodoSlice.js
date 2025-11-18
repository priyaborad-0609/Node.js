import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/todos";

// GET TODOS 
export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
    const res = await axios.get(API_URL);
    return res.data;
});

// ADD TODO 
export const addTodoBackend = createAsyncThunk(
    "todos/add",
    async ({ text, description }) => {
        const res = await axios.post(API_URL, { text, description });
        return res.data;
    }
);

//  UPDATE TODO 
export const updateTodoBackend = createAsyncThunk(
    "todos/update",
    async ({ id, text, description }) => {
        const res = await axios.put(`${API_URL}/${id}`, { text, description });
        return res.data;
    }
);

//  DELETE TODO 
export const deleteTodoBackend = createAsyncThunk(
    "todos/delete",
    async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        return id;
    }
);

const todoSlice = createSlice({
    name: "Todos",
    initialState: [],

    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (_, action) => {
                return action.payload;
            })

            .addCase(addTodoBackend.fulfilled, (state, action) => {
                state.push(action.payload);
            })

            .addCase(updateTodoBackend.fulfilled, (state, action) => {
                const index = state.findIndex(t => t.id === action.payload.id);
                if (index !== -1) state[index] = action.payload;
            })

            .addCase(deleteTodoBackend.fulfilled, (state, action) => {
                return state.filter(t => t.id !== action.payload);
            });
    }
});

export default todoSlice.reducer;
