import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
      paper: '#16181c',
    },
    primary: {
      main: '#1d9bf0',
    },
  },
})

export default theme