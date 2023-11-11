"use client"

// Import necessary modules
import React, { useState, useEffect } from 'react';

// MapContainer component
// It ensures that its children are only rendered on the client side
function MapContainer({ children }) {
    // State to track if the component is being rendered on the client side
    const [isClient, setIsClient] = useState(false);

    // Set isClient to true after the component is mounted
    useEffect(() => {
        setIsClient(true);
    }, []); // Empty dependency array ensures this runs only on mount and not on updates

    // Render children if on the client side, otherwise render null
    return <>{isClient ? children : null}</>;
}

// Export the component
export default MapContainer;