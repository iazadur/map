'use client'
import { Box, Grid } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchContainer from './SearchContainer'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { setFullScreen } from '@/redux/site/siteSlice'
function ControlLayout({ children }) {
    const { isFullScreen } = useSelector(state => state.site)
    const dispatch = useDispatch()

    const handleFullScreen = () => {
        dispatch(setFullScreen(false))
    }
    return (
        <>
            {!isFullScreen ? <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <SearchContainer />
                </Grid>
                <Grid item bgcolor={'black'} xs={12} md={6}>
                    {children}
                </Grid>
            </Grid> :

                <>
                    <KeyboardArrowRightIcon onClick={handleFullScreen} sx={{ position: 'fixed', top: '50px', left: '10px', transform: 'translateY(-50%)', zIndex: '9999', color: '#000',cursor:'pointer',p:2 }} />
                    {children}
                </>
            }
        </>
    )
}

export default ControlLayout