import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedLocation: {},
    searchInput: '',
    searchResults: [],

}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setSelectedLocation: (state, action) => {
            state.selectedLocation = action.payload
            state.searchInput = action.payload?.area || ''
        },
        setSearchInput: (state, action) => {
            state.searchInput = action.payload
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    setSelectedLocation,
    setSearchInput,
    setSearchResults,
 } = locationSlice.actions

export default locationSlice.reducer