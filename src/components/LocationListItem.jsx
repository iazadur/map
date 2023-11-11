'use client'

// Import necessary modules and components
import React from 'react';
import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch } from 'react-redux';
import { setSelectedLocation } from '@/redux/location/locationSlice';

// LocationListItem component
// It receives a data prop and displays the location details
function LocationListItem({ data }) {
    const theme = useTheme(); // Get the current theme
    const dispatch = useDispatch(); // Get the dispatch function from Redux

    // Function to dispatch the selected location to the Redux store
    const setLocation = (selectedLocation) => {
        dispatch(setSelectedLocation(selectedLocation));
    };

    // Render the component
    return (
        <Stack
            component={'li'}
            direction={'row'}
            gap={1}
            alignItems={'center'}
            onClick={() => setLocation(data)} // Set the selected location on click
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
                <Typography variant="body1" fontSize={'18px'}>{data?.area}</Typography> {/* Display area */}
                <Typography variant="body1" fontSize={'16px'}>{data?.address}</Typography> {/* Display address */}
                <Typography variant="body1" fontSize={'12px'} color={theme.palette.grey[600]}>
                    <Typography component={'span'} fontSize={'12px'} bgcolor={"#00000015"}>Thana:</Typography> {data?.area},{" "}
                    <Typography component={'span'} fontSize={'12px'} bgcolor={"#00000015"}>District:</Typography> {data?.city}
                </Typography> {/* Display thana and district */}
                <Stack direction={'row'}>
                    <Typography color={theme.palette.grey[600]} component={'p'} fontSize={'12px'} bgcolor={"#00000015"} p={"1px"}>{data?.pType}</Typography>
                </Stack> {/* Display property type */}
            </Stack>
        </Stack>
    );
}

// Export the component
export default LocationListItem;