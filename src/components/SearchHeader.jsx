'use client'

// Import necessary modules and components
import { Box, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { setFullScreen, toggleDarkMode } from '@/redux/site/siteSlice';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// SearchHeader component
// It displays the header for the search section and provides controls for full screen and dark mode
function SearchHeader() {
    const dispatch = useDispatch(); // Get the dispatch function from Redux
    const theme = useTheme(); // Get the current theme

    // Function to dispatch the full screen action to the Redux store
    const handleFullScreen = () => {
        dispatch(setFullScreen(true));
    };

    // Function to dispatch the dark mode toggle action to the Redux store
    const handleDarkMode = () => {
        dispatch(toggleDarkMode());
    };

    // Render the component
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mx: 2 }}>
                <Typography variant="h1"
                    fontSize={{ xs: 'h5.fontSize', sm: 'h6.fontSize', md: 'h6.fontSize' }}
                    fontWeight="bold"
                >
                    Bari <span style={{ color: "#2ddbac" }}>koi</span>
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={{ ml: 1 }} onClick={handleDarkMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    <IconButton type="button" onClick={handleFullScreen} sx={{ p: '10px' }} aria-label="search">
                        <KeyboardArrowLeftIcon />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
}

// Export the component
export default SearchHeader;