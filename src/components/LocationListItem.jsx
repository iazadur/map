'use client'
import { Stack, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch } from 'react-redux'
import { setSelectedLocation } from '@/redux/location/locationSlice';

function LocationListItem({ data }) {
    const dispatch = useDispatch()
    const setLocation = (select) => {
        dispatch(setSelectedLocation(select))
    }
    return (
        <Stack onClick={() => setLocation(data)} component={'li'} direction={'row'} gap={1} alignItems={'center'}
            sx={{
                py: '10px',
                borderBottom: '1px solid #00000020',
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: '#00000010'
                }

            }}
        >
            <LocationOnIcon />
            <Stack direction={'column'}>
                <Typography variant="body1" fontSize={'18px'}>{data?.area}</Typography>
                <Typography variant="body1" fontSize={'16px'}>{data?.address}</Typography>
                <Typography variant="body1" fontSize={'12px'} color={"#00000080"}>
                    <Typography component={'span'} fontSize={'12px'} bgcolor={"#00000015"}>Thana:</Typography> {data?.area},{" "}
                    <Typography component={'span'} fontSize={'12px'} bgcolor={"#00000015"}>District:</Typography> {data?.city}
                </Typography>
                <Stack direction={'row'}>
                    <Typography color={"#00000080"} component={'p'} fontSize={'12px'} bgcolor={"#00000015"} p={"1px"}>{data?.pType}</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default LocationListItem