import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  onClickLikeComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...prevState, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onClickDelete = id => {
    console.log('comment id =', id)
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => id !== eachComment.id,
      ),
    }))
  }

  onClickAddBtn = () => {
    const {name, comment} = this.state
    const newComment = {
      name,
      comment,
      id: uuidv4(),
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onClickNameInput = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangeTextarea = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  render() {
    const {commentsList, name, comment} = this.state
    console.log('is liked', commentsList)
    const noOfComments = commentsList.length
    return (
      <div className="bg_container">
        <div className="top-card">
          <form>
            <h1 className="heading">Comments</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image small-screen-image"
            />

            <p>Say something about 4.0 Technologies</p>
            <input
              type="text"
              value={name}
              placeholder="Your Name"
              className="inputelement"
              onChange={this.onClickNameInput}
            />
            <textarea
              className="textarea"
              value={comment}
              placeholder="Your Comment"
              cols="30"
              rows="10"
              onChange={this.onChangeTextarea}
            />
            <button
              className="button"
              type="button"
              onClick={this.onClickAddBtn}
            >
              Add Comment
            </button>
          </form>

          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-image large-screen-image"
          />
        </div>
        <hr className="horizontal-line" />
        <div className="bottom-card">
          <div className="bottom-card-heading">
            <p className="comments-count">{noOfComments}</p>
            <p>Comments</p>
          </div>
          <ul className="unordered-list">
            {commentsList.map(eachUser => (
              <CommentItem
                onClickLikeComment={this.onClickLikeComment}
                onClickDelete={this.onClickDelete}
                key={eachUser.id}
                user={eachUser}
                bgColorsList={initialContainerBackgroundClassNames}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
