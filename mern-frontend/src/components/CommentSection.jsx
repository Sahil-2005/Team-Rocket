import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCircle } from 'lucide-react';
import './CommentSection.css';

const CommentSection = ({ 
  initialComments = [], 
  onCommentAdd, 
  headerText = "Comments", 
  avatarIcon: AvatarIcon = UserCircle, 
  placeholderText = "Write a comment...", 
  buttonText = "Post Comment" 
}) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        name: "You",
        text: newComment.trim(),
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      if (onCommentAdd) {
        onCommentAdd(newCommentObj);
      }
    }
  };

  return (
    <div className="comment-section">
      <div className="comment-box">
        <h2 className="comment-header">{headerText}</h2>
        <div className="comment-list">
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="comment-item"
            >
              <AvatarIcon className="comment-avatar" />
              <div>
                <p className="comment-name">{comment.name}</p>
                <p className="comment-text">{comment.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="comment-input-box">
        <textarea
          placeholder={placeholderText}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="comment-textarea"
        />
        <button
          onClick={handleAddComment}
          className="comment-button"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CommentSection;