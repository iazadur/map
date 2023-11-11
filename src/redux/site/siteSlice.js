import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode: false,
    language: 'en',
    isFullScreen: false,

}

export const siteSlice = createSlice({
    name: 'site',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        },
        setFullScreen: (state, action) => {
            state.isFullScreen = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    toggleDarkMode,
    setLanguage,
    setFullScreen,
 } = siteSlice.actions

export default siteSlice.reducer