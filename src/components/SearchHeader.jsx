'use client'
import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { setFullScreen } from '@/redux/site/siteSlice';

function SearchHeader() {
    const dispatch = useDispatch()

    const handleFullScreen = () => {
        dispatch(setFullScreen(true))
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',mx:2 }}>
                <Typography variant="h1"
                    fontSize={{ xs: 'h5.fontSize', sm: 'h6.fontSize', md: 'h6.fontSize' }}
                    fontWeight="bold"
                >Bari <span style={{ color: "#2ddbac" }}>koi</span></Typography>
                <IconButton type="button" onClick={handleFullScreen} sx={{ p: '10px' }} aria-label="search">
                    <KeyboardArrowLeftIcon />
                </IconButton>
            </Box>
        </>
    )
}

export default SearchHeader