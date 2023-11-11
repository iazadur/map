
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import siteReducer from './site/siteSlice'
import locationReducer from './location/locationSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        site: siteReducer,
        location: locationReducer,
    },
})