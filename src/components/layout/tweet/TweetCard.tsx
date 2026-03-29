import { useState } from 'react'
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  TextField,
  Button,
} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

type Reply = {
  id: number
  content: string
  author: string
}

type TweetProps = {
  name: string
  username: string
  content: string
}

export default function TweetCard({ name, username, content }: TweetProps) {
  const [liked, setLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(0)

  const [showReply, setShowReply] = useState(false)
  const [replyText, setReplyText] = useState('')
  const [replies, setReplies] = useState<Reply[]>([])

  const handleLike = () => {
    if (liked) setLikesCount((prev) => prev - 1)
    else setLikesCount((prev) => prev + 1)

    setLiked(!liked)
  }

  const handleAddReply = () => {
    if (!replyText.trim()) return

    const newReply: Reply = {
      id: Date.now(),
      content: replyText,
      author: 'karol',
    }

    setReplies((prev) => [newReply, ...prev])
    setReplyText('')
    setShowReply(false)
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      borderBottom="1px solid #2f3336"
      sx={{ '&:hover': { backgroundColor: '#16181c' } }}
    >
      {/* TWEET PRINCIPAL */}
      <Box display="flex" gap={2} p={2}>
        <Avatar>{name?.charAt(0).toUpperCase()}</Avatar>

        <Box flex={1}>
          <Box display="flex" gap={1}>
            <Typography fontWeight="bold">{name}</Typography>
            <Typography color="gray">@{username}</Typography>
          </Box>

          <Typography mt={1}>{content}</Typography>

          {/* AÇÕES */}
          <Box display="flex" gap={3} mt={1}>
            {/* Reply */}
            <IconButton size="small" onClick={() => setShowReply(!showReply)}>
              <ChatBubbleOutlineIcon fontSize="small" />
            </IconButton>

            {/* Like */}
            <Box display="flex" alignItems="center">
              <IconButton size="small" onClick={handleLike}>
                {liked ? (
                  <FavoriteIcon fontSize="small" sx={{ color: 'red' }} />
                ) : (
                  <FavoriteBorderIcon fontSize="small" />
                )}
              </IconButton>

              <Typography fontSize="12px">{likesCount}</Typography>
            </Box>
          </Box>

          {/* INPUT DE RESPOSTA */}
          {showReply && (
            <Box mt={2} display="flex" flexDirection="column" gap={1}>
              <TextField
                size="small"
                placeholder="Responder..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                sx={{ textarea: { color: 'white' } }}
              />

              <Button variant="contained" onClick={handleAddReply}>
                Responder
              </Button>
            </Box>
          )}

          {/* LISTA DE RESPOSTAS */}
          {replies.map((reply) => (
            <Box key={reply.id} mt={2} ml={4} display="flex" gap={2}>
              <Avatar>{reply.author[0].toUpperCase()}</Avatar>

              <Box>
                <Typography fontWeight="bold">
                  {reply.author}
                </Typography>
                <Typography>{reply.content}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}