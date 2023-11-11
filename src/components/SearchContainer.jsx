import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Input from './Input';
import SearchHeader from './SearchHeader';

function SearchContainer() {
    return (
        <>
            <SearchHeader />
            <Input />
        </>
    )
}

export default SearchContainer