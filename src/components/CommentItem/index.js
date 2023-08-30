// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {user, bgColorsList} = props
  const index = parseInt(Math.random() * 6)
  const colorName = bgColorsList[index]
  console.log('colorName = ', colorName)
  const {name, comment} = user

  const initial = name.slice(0, 1)

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
          <button className="like-button" type="button" data-testid="delete">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
            />
          </button>
          <p>Like</p>
        </div>
        <button type="button" className="like-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
