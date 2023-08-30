// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {user, bgColorsList, onClickDelete, onClickLikeComment} = props
  const index = parseInt(Math.random() * 6)
  const colorName = bgColorsList[index]

  const {name, comment, id, isLiked} = user

  const initial = name.slice(0, 1)

  const likedImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const text = isLiked ? 'like-color' : ''
  const deleteComment = () => {
    onClickDelete(id)
  }

  const onClickLikeBtn = () => {
    onClickLikeComment(id)
  }

  return (
    <li className="list-item">
      <div className="top-container">
        <div className={`porfile-icon-container ${colorName}`}>
          <p className="profile-icon ">{initial}</p>
        </div>
        <div className="name-time-comment-container">
          <div className="name-time-container">
            <h1 className="heading">{name}</h1>
            <p className="time">{formatDistanceToNow(new Date())}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-delete-inside-container">
          <button
            className="like-button"
            type="button"
            onClick={onClickLikeBtn}
          >
            <img src={likedImage} alt="like" />
          </button>
          <p className={`${text}`}>Like</p>
        </div>
        <button type="button" className="like-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            data-testid="delete"
            onClick={deleteComment}
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
