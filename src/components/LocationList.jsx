
import { Box } from '@mui/material'
import React from 'react'
import LocationListItem from './LocationListItem';
function LocationList({ data }) {

    return (
        <Box component={'ul'} sx={{
            maxHeight: '400px',
            overflowY: 'scroll',
            px: '5px',
            '&::-webkit-scrollbar': {
                width: '5px',
                color: '#00000020',
            },
        }}>
            {data?.map((_, index) => <LocationListItem key={index} data={_} />)}
        </Box>
    )
}

export default LocationList