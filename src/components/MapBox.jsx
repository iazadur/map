'use client'
import React, { useState, useEffect, useMemo } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
function MapBox() {
    const { selectedLocation } = useSelector(state => state.location)
    const latitude = selectedLocation?.latitude || 23.8103
    const longitude = selectedLocation?.longitude || 90.4125
    const center = [latitude, longitude]
    const zoom = 15

    const [map, setMap] = useState(null)

    const displayMap = useMemo(
        () => (
            <MapContainer
                style={{ height: '100vh', width: '100%' }}
                center={center}
                zoom={zoom}
                scrollWheelZoom={true}
                ref={setMap}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Add Marker for selected location */}
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
    )

    // Update map when selectedLocation changes
    useEffect(() => {
        if (map && selectedLocation) {
            const newCenter = [latitude, longitude];
            map.setView(newCenter, zoom);
        }
    }, [map, selectedLocation?.area, zoom]);

    return (
        <div>
            {displayMap}
        </div>
    )
}

export default MapBox
