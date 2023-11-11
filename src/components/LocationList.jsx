// Import necessary libraries and components
import React from 'react';
import { Box } from '@mui/material';
import LocationListItem from './LocationListItem';

// LocationList component
// It receives a data prop and maps it to LocationListItem components
function LocationList({ data }) {
    return (
        <Box
            component={'ul'}
            sx={{
                maxHeight: '400px',
                overflowY: 'scroll',
                px: '5px',
                '&::-webkit-scrollbar': {
                    width: '5px',
                    color: '#00000020',
                },
            }}
        >
            {data?.map((item, index) => <LocationListItem key={index} data={item} />)}
        </Box>
    );
}

// Export the component
export default LocationList;