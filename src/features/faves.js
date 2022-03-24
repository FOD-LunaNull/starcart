import { createSlice, current, nanoid } from '@reduxjs/toolkit'

const createFave = (fave, name) => ({
	id: nanoid(),
	rating: 5,
	name,
	...fave,
})
const initialState = []

export const favesSlice = createSlice({
	name: 'faves',
	initialState,
	reducers: {
		addFave: (state, action) => {
			const name = action.payload.name ? action.payload.name : action.payload.title ? action.payload.title : 'no name'
			const fave = createFave(action.payload, name)
			state.push(fave)
		},
		updateFave: (state, action) => {
			// find fave
			// update fave with array of ids if none exists,
			// or add related id if doesn't exist in array already
		},
		rateFave: (state, action) => {
			// find fave
			// update new on that fave
		},
		removeFave: (state, action) => {
			// const selectedFave = action.payload
			console.log('faves', current(state))
			/*
			 ! remove fave code here */
			// state.faves = ... //
		},
	},
})

export const { addFave, removeFave, rateFave } = favesSlice.actions
export const selectFaveState = state => state.faves
