'use client'
// Import necessary modules
import React, { useState, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

// Dynamically import MapContainer, TileLayer, Marker, and Popup from 'react-leaflet'
// This is done to avoid server-side rendering issues with Leaflet
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

function MapBox() {
    // Get selectedLocation from Redux state
    const { selectedLocation } = useSelector(state => state.location);

    // Set default latitude and longitude
    const latitude = selectedLocation?.latitude || 23.8103;
    const longitude = selectedLocation?.longitude || 90.4125;

    // Center of the map
    const center = [latitude, longitude];

    // Zoom level for the map
    const zoom = 15;

    // State for map instance
    const [map, setMap] = useState(null);

    // Memoized map component to avoid unnecessary re-renders
    const displayMap = useMemo(
        () => (
            <MapContainer
                style={{ height: '100vh', width: '100%' }}
                center={center}
                zoom={zoom}
                scrollWheelZoom={true}
                whenCreated={setMap}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Add Marker for selected location if area is defined */}
                {selectedLocation?.area && (
                    <Marker position={[latitude, longitude]}>
                        <Popup>
                            <div>
                                <Typography m={0} component={'h3'} variant='body1'>Area: {selectedLocation?.area}</Typography>
                                <Typography variant='body2' component={'p'}>City: {selectedLocation?.city}</Typography>
                            </div>
                        </Popup>
                    </Marker>
                )}
            </MapContainer>
        ),
        [center, zoom],
    );

    // Update map center when selectedLocation changes
    useEffect(() => {
        if (map && selectedLocation) {
            const newCenter = [latitude, longitude];
            map.setView(newCenter, zoom);
        }
    }, [map, selectedLocation, zoom]);

    return (
        <div>
            {displayMap}
        </div>
    );
}

export default MapBox;