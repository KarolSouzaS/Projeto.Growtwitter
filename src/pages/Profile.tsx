import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography, Avatar } from '@mui/material'

import Layout from '../components/layout/Layout'
import TweetCard from '../components/layout/tweet/TweetCard'
import type { Tweet } from '../services/mockApi'

export default function Profile() {
  const { username } = useParams()
  const [tweets, setTweets] = useState<Tweet[]>([])

  useEffect(() => {
    const savedTweets = localStorage.getItem('tweets')

    if (savedTweets) {
      const allTweets: Tweet[] = JSON.parse(savedTweets)

      // 🔹 filtrar tweets do usuário
      const userTweets = allTweets.filter(
        (tweet) => tweet.author === username
      )

      setTweets(userTweets)
    }
  }, [username])

  return (
    <Layout>
      {/* HEADER DO PERFIL */}
      <Box p={2} borderBottom="1px solid #2f3336">
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar sx={{ width: 60, height: 60 }}>
            {username?.charAt(0).toUpperCase()}
          </Avatar>

          <Box>
            <Typography variant="h6">{username}</Typography>
            <Typography color="gray">@{username}</Typography>
          </Box>
        </Box>
      </Box>

      {/* LISTA DE TWEETS */}
      {tweets.length === 0 ? (
        <Typography p={2}>Nenhum tweet ainda</Typography>
      ) : (
        tweets.map((tweet) => (
          <TweetCard
            key={tweet.id}
            name={tweet.author}
            username={tweet.author}
            content={tweet.content}
          />
        ))
      )}
    </Layout>
  )
}
