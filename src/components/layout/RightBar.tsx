import { Box, Typography } from '@mui/material'

export default function RightBar() {
  return (
    <Box flex={1} p={2}>
      <Typography variant="h6">O que está acontecendo</Typography>

      <Box mt={2}>
        <Typography>#React</Typography>
        <Typography>#Growdev</Typography>
        <Typography>#Frontend</Typography>
      </Box>
    </Box>
  )
}