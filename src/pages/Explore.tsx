import { Box, Typography, Paper } from '@mui/material'
import Layout from '../components/layout/Layout'

const trends = [
  { title: '#ReactJS', tweets: '120K Tweets' },
  { title: '#Frontend', tweets: '85K Tweets' },
  { title: '#JavaScript', tweets: '200K Tweets' },
  { title: '#Vite', tweets: '40K Tweets' },
  { title: '#OpenAI', tweets: '300K Tweets' },
]

export default function Explore() {
  return (
    <Layout>
      <Box p={2}>
        <Typography variant="h6" mb={2}>
          Explorar
        </Typography>

        {trends.map((trend, index) => (
          <Paper
            key={index}
            sx={{
              p: 2,
              mb: 2,
              backgroundColor: '#16181c',
              color: 'white',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#1d1f23',
              },
            }}
          >
            <Typography fontWeight="bold">{trend.title}</Typography>
            <Typography fontSize="12px" color="gray">
              {trend.tweets}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Layout>
  )
}