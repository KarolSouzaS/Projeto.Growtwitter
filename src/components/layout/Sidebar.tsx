import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <Box flex={1} p={2}>
      <Typography variant="h5" mb={3}>
        GrowTwitter
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>

        <Button component={Link} to="/explore" color="inherit">
          Explorar
        </Button>

        <Button component={Link} to="/profile/karol" color="inherit">
          Perfil
        </Button>
      </Box>
    </Box>
  )
}