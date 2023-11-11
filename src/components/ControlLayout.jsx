'use client'
// Import necessary modules and components
import { Box, Grid } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchContainer from './SearchContainer';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { setFullScreen } from '@/redux/site/siteSlice';
import Input from './Input';

/**
 * ControlLayout component
 * This component is responsible for controlling the layout of the application.
 * It checks if the application is in full screen mode and adjusts the layout accordingly.
 * 
 * @param {Object} props - The properties passed to this component.
 * @param {React.ReactNode} props.children - The child components to be rendered within this layout.
 */
function ControlLayout({ children }) {
    // Get isFullScreen from Redux state
    const { isFullScreen } = useSelector(state => state.site);

    // Get dispatch function from Redux
    const dispatch = useDispatch();

    /**
     * handleFullScreen function
     * This function dispatches an action to the Redux store to exit full screen mode.
     */
    const handleFullScreen = () => {
        dispatch(setFullScreen(false));
    };

    // Return the component JSX
    return (
        <>
            {/* Input component is displayed only on small screens */}
            <Box display={{ xs: 'block', md: 'none' }}
                sx={{ position: 'fixed', top: '50px', left: 0, right: 0, width: '100%', zIndex: '9999' }}
            >
                <Input />
            </Box>

            {/* If not in full screen mode, display SearchContainer and children in a grid */}
            {!isFullScreen ? (
                <Grid container spacing={2}>
                    {/* SearchContainer is displayed only on medium and larger screens */}
                    <Grid item xs={12} md={4} display={{ xs: 'none', md: 'block' }}>
                        <SearchContainer />
                    </Grid>
                    {/* Children are always displayed */}
                    <Grid item xs={12} md={8}>
                        {children}
                    </Grid>
                </Grid>
            ) : (
                // If in full screen mode, display an icon to exit full screen and the children
                <>
                    <KeyboardArrowRightIcon
                        onClick={handleFullScreen}
                        sx={{
                            position: 'fixed',
                            top: '40px',
                            left: '10px',
                            transform: 'translateY(-50%)',
                            zIndex: '9999',
                            color: '#000',
                            cursor: 'pointer',
                            m: 1
                        }}
                    />
                    {children}
                </>
            )}
        </>
    );
}

// Export ControlLayout component
export default ControlLayout;