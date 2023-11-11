'use client'
import React from 'react'

function MapContainer({ children }) {
    // Return the component JSX when window is available
    if (typeof window !== 'undefined') {
        return (
            <>{children}</>
        )
    }else{
        return null
    }
}

export default MapContainer