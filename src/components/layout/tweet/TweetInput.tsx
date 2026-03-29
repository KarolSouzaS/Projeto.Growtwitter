import { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'

type Props = {
  onAddTweet: (content: string) => void
}

export default function TweetInput({ onAddTweet }: Props) {
  const [content, setContent] = useState('')

  const handleSubmit = () => {
    if (!content.trim()) return

    onAddTweet(content)
    setContent('')
  }

  return (
    <Box
      p={2}
      borderBottom="1px solid #2f3336"
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <TextField
        placeholder="O que está acontecendo?"
        variant="outlined"
        fullWidth
        multiline
        rows={2}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{
          textarea: { color: 'white' },
        }}
      />

      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" onClick={handleSubmit}>
          Tweetar
        </Button>
      </Box>
    </Box>
  )
}