import Image from 'next/image'
import styles from './page.module.css'
import { Box, Grid } from '@mui/material'
import BkoiGl from '@/components/bkoi-gl'
import Input from '@/components/Input'
import SearchContainer from '@/components/SearchContainer'
import MapContainer from '@/components/MapContainer'
import ControlLayout from '@/components/ControlLayout'

export default function Home() {
  return (
    <Box flexGrow={1}>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <SearchContainer />
        </Grid>
        <Grid item bgcolor={'black'} xs={12} md={6}>
          <MapContainer />
          </Grid>
        </Grid> */}
      <ControlLayout>
        <MapContainer />
      </ControlLayout>
    </Box>
  )
}
