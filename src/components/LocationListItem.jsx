'use client'// Import necessary modules and components
import { Stack, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch } from 'react-redux'
import { setSelectedLocation } from '@/redux/location/locationSlice';

// Define LocationListItem component
function LocationListItem({ data }) {
    // Get dispatch function from Redux
    const dispatch = useDispatch()

    // Define function to dispatch selected location to Redux store
    const setLocation = (select) => {
        dispatch(setSelectedLocation(select))
    }

    // Return the component JSX
    return (
        // Stack component acts as a list item (li) and sets the selected location on click
        <Stack onClick={() => setLocation(data)} component={'li'} direction={'row'} gap={1} alignItems={'center'}
            sx={{
                py: '10px',
                borderBottom: '1px solid #00000020',
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: '#00000010'
                }
            }}
        >
            <LocationOnIcon /> {/* Location icon */}
            <Stack direction={'column'}>
                {/* Display area, address, and city of the location */}
                <Typography variant="body1" fontSize={'18px'}>{data?.area}</Typography>
                <Typography variant="body1" fontSize={'16px'}>{data?.address}</Typography>
                <Typography variant="body1" fontSize={'12px'} color={"#00000080"}>
                    <Typography component={'span'} fontSize={'12px'} bgcolor={"#00000015"}>Thana:</Typography> {data?.area},{" "}
                    <Typography component={'span'} fontSize={'12px'} bgcolor={"#00000015"}>District:</Typography> {data?.city}
                </Typography>
                <Stack direction={'row'}>
                    {/* Display property type */}
                    <Typography color={"#00000080"} component={'p'} fontSize={'12px'} bgcolor={"#00000015"} p={"1px"}>{data?.pType}</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

// Export LocationListItem component
export default LocationListItem