import { createSlice } from "@reduxjs/toolkit";

const initialState = {
balance: 0
}

export const transactionsSlice = createSlice({
name: 'transatcion',
initialState,
reducers: {
buyItem: (state, action) => {
state.transaction += action.payload},
sellItem: (state, action) => {
state.transaction -= action.payload},
clear: () => [],
}
})

export const {buyItem, sellItem, clear} =transactionsSlice.actions;

export default transactionsSlice.reducer;