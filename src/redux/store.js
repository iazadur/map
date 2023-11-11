
import { configureStore } from '@reduxjs/toolkit'
import siteReducer from './site/siteSlice'
import locationReducer from './location/locationSlice'


export const store = configureStore({
    reducer: {
        site: siteReducer,
        location: locationReducer,
    },
})