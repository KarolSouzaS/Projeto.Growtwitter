export type Reply = {
  id: number
  content: string
  author: string
}

export type Tweet = {
  id: number
  content: string
  author: string
  replies?: Reply[]
}

// 🔐 Mock de login (caso queira usar depois)
export const mockLogin = async (email: string, password: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'fake-token-123',
        user: {
          id: 1,
          name: 'Karol Souza',
          email: email,
        },
      })
    }, 500)
  })
}

// 🐦 Mock de tweets
export const mockPosts = async (): Promise<Tweet[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          content: 'Meu primeiro tweet 🚀',
          author: 'karol',
          replies: [],
        },
        {
          id: 2,
          content: 'GrowTwitter está ficando incrível 😄',
          author: 'growdev',
          replies: [],
        },
      ])
    }, 500)
  })
}