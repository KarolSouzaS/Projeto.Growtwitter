import { Box } from '@mui/material'
import Sidebar from './Sidebar'
import RightBar from './RightBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box display="flex" bgcolor="#000" color="#fff" minHeight="100vh">
      <Sidebar />

      <Box flex={2} borderLeft="1px solid #2f3336" borderRight="1px solid #2f3336">
        {children}
      </Box>

      <RightBar />
    </Box>
  )
}