'use client'
// Import necessary modules and components
import { Grid } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchContainer from './SearchContainer'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { setFullScreen } from '@/redux/site/siteSlice'

// Define ControlLayout component
function ControlLayout({ children }) {
    // Get isFullScreen from Redux state
    const { isFullScreen } = useSelector(state => state.site)

    // Get dispatch function from Redux
    const dispatch = useDispatch()

    // Define function to dispatch setFullScreen action to Redux store
    const handleFullScreen = () => {
        dispatch(setFullScreen(false))
    }

    // Return the component JSX
    return (
        <>
            {/* If not in full screen mode, display SearchContainer and children in a grid */}
            {!isFullScreen ? (
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <SearchContainer />
                    </Grid>
                    <Grid item bgcolor={'black'} xs={12} md={6}>
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
                            top: '50px',
                            left: '10px',
                            transform: 'translateY(-50%)',
                            zIndex: '9999',
                            color: '#000',
                            cursor: 'pointer',
                            p: 2
                        }}
                    />
                    {children}
                </>
            )}
        </>
    )
}

// Export ControlLayout component
export default ControlLayout