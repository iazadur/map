"use client"
import React, { useState, useEffect } from 'react'

function MapContainer({ children }) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return <>{isClient ? children : null}</>
}

export default MapContainer