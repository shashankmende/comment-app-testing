import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
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
  render() {
    return (
      <div className="bg_container">
        <div className="top-card-horizontal-line">
          <div className="top-card-responsive-container">
            <div className="top-card">
              <h1 className="heading">Comments</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
                alt="comments"
                className="comments-image small-screen-image"
              />

              <div className="input-textarea-button-container">
                <p>Say something about 4.0 Technologies</p>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="inputelement"
                />
                <textarea
                  className="textarea"
                  placeholder="Your Comment"
                  cols="40"
                  rows="10"
                />
                <button className="button" type="button">
                  Add Comment
                </button>
              </div>
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
                alt="comments"
                className="comments-image large-screen-image"
              />
            </div>
          </div>
          <hr className="horizontal-line" />
        </div>
      </div>
    )
  }
}

export default Comments
