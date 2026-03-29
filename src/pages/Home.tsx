import { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import TweetCard from '../components/layout/tweet/TweetCard'
import TweetInput from '../components/layout/tweet/TweetInput'
import { mockPosts, type Tweet } from '../services/mockApi'

export default function Home() {
  const [tweets, setTweets] = useState<Tweet[]>([])
  const [loading, setLoading] = useState(true)

  // 🔹 Carregar tweets
  useEffect(() => {
    const loadTweets = async () => {
      try {
        const savedTweets = localStorage.getItem('tweets')

        if (savedTweets) {
          setTweets(JSON.parse(savedTweets))
        } else {
          const data = await mockPosts()
          setTweets(data)
        }
      } catch (error) {
        console.error('Erro ao carregar tweets', error)
      } finally {
        setLoading(false)
      }
    }

    loadTweets()
  }, [])

  // 🔹 Salvar sempre que tweets mudar
  useEffect(() => {
    if (tweets.length > 0) {
      localStorage.setItem('tweets', JSON.stringify(tweets))
    }
  }, [tweets])

  // 🔹 Criar novo tweet
  const handleAddTweet = (content: string) => {
    const newTweet: Tweet = {
      id: Date.now(),
      content,
      author: 'karol',
      replies: [],
    }

    setTweets((prev) => [newTweet, ...prev])
  }

  return (
    <Layout>
      <TweetInput onAddTweet={handleAddTweet} />

      {loading ? (
        <p style={{ padding: '16px' }}>Carregando...</p>
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