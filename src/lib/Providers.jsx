'use client'
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import MUIProvider from './MUIProvider'

export default function Providers({ children }) {
    return (

        <Provider store={store}>
            <MUIProvider>
                {children}
            </MUIProvider>
        </Provider>
    )
}


