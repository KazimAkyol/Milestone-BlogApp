import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  Typography,
} from "@mui/material";

const CommentsModal = () => {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div>
      {/* Yorum Açma Butonu */}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Comments
      </Button>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Comments</DialogTitle>
        <DialogContent>
          {/* Yorumlar Listesi */}
          {comments.length > 0 ? (
            <Box mb={2}>
              {comments.map((comment, index) => (
                <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                  {index + 1}. {comment}
                </Typography>
              ))}
            </Box>
          ) : (
            <Typography variant="body2" color="text.secondary" mb={2}>
              No comments yet. Be the first to comment!
            </Typography>
          )}

          {/* Yeni Yorum Girişi */}
          <TextField
            fullWidth
            label="Add a comment"
            variant="outlined"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
          <Button
            onClick={handleAddComment}
            color="primary"
            variant="contained"
          >
            Add Comment
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CommentsModal;
