import { Box } from '@mui/material'
import ControlLayout from '@/components/ControlLayout'
import MapBox from '@/components/MapBox'

export default function Home() {
  return (
    <Box flexGrow={1}>
      <ControlLayout>
        <MapBox />
      </ControlLayout>
    </Box>
  )
}
