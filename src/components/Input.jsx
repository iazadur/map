'use client'
// Import necessary libraries and components
import * as React from 'react';
import { Box, Paper, InputBase, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import LocationList from './LocationList';
import { setSearchInput } from '@/redux/location/locationSlice';

// Define API key
const API_KEY = 'bkoi_39b6fa0e1708c1e074a90a0964f59a419caef3cadd347886454e207a3408e0d9';

// Function to fetch data from API
const getData = async (searchInput) => {
    const result = await fetch(`https://barikoi.xyz/v2/api/search/autocomplete/place?api_key=${API_KEY}&q=${searchInput}&bangla=true`);
    const data = await result.json();
    return data;
};

// Main component
export default function Input() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { searchInput } = useSelector(state => state.location);
    const [data, setData] = React.useState([]);

    // Function to handle input changes
    const handleInput = async (e) => {
        dispatch(setSearchInput(e.target.value));
        const data = await getData(e.target.value);
        setData(data);
    };

    // Function to handle closing the input
    const handleClose = () => {
        dispatch(setSearchInput(''));
        setData([]);
    };

    // Render component
    return (
        <Box sx={{ position: 'relative', mx: 2 }}>
            <Paper component="form" sx={{ display: 'flex', alignItems: 'center', p: 1, boxShadow: '3px 4px 10px -4px rgba(0, 0, 0, .35)' }}>
                <InputBase
                    value={searchInput}
                    onChange={handleInput}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Google Maps"
                    inputProps={{ 'aria-label': 'Search Location.' }}
                />
                {searchInput?.length > 0 && (
                    <IconButton onClick={handleClose} sx={{ borderRadius: '0', '&:hover': { backgroundColor: 'transparent' } }}>
                        <CloseIcon />
                    </IconButton>
                )}
                <IconButton className='linear_bg' sx={{ py: '4px', px: '10px' }} aria-label="directions">
                    <SearchIcon sx={{ color: '#fff' }} />
                </IconButton>
            </Paper>
            {data?.places?.length > 0 && (
                <Paper sx={{ position: 'absolute', top: '100%', left: '0', right: '0', width: '100%', zIndex: '100', boxShadow: '3px 4px 10px -4px rgba(0, 0, 0, .35)', mt: '1px' }}>
                    <LocationList data={data?.places} />
                </Paper>
            )}
        </Box>
    );
}