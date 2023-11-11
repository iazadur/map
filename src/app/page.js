import { Box } from '@mui/material'
import ControlLayout from '@/components/ControlLayout'
import MapBox from '@/components/MapBox'
import MapContainer from '@/components/MapContainer'

export default function Home() {
  return (
    <Box flexGrow={1}>
      <ControlLayout>
        <MapContainer>
          <MapBox />
        </MapContainer>
      </ControlLayout>
    </Box>
  )
}
