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

class Comments extends Component {
  state = {
    UserDetailsList: [],
    name: '',
    comment: '',
  }

  formSubmitEvent = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const randomClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      initialClassName: randomClassName,
      isLiked: false,
      addedTime: new Date(),
    }
    this.setState(prevState => ({
      UserDetailsList: [...prevState.UserDetailsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onPersonNameChange = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  onCommentLike = id => {
    this.setState(prevState => ({
      UserDetailsList: prevState.UserDetailsList.map(userList => {
        if (userList.id === id) {
          return {...userList, isLiked: !userList.isLiked}
        }
        return userList
      }),
    }))
  }

  onCommentDelete = id => {
    this.setState(prevState => ({
      UserDetailsList: prevState.UserDetailsList.filter(
        eachList => eachList.id !== id,
      ),
    }))
  }

  render() {
    const {UserDetailsList, name, comment} = this.state
    return (
      <div className="container">
        <div className="contain-container">
          <h1 className="main-heading">Comments</h1>
          <div className="form-container">
            <form className="user-form" onSubmit={this.formSubmitEvent}>
              <p className="form-heading">
                Say something about 4.0 techanology
              </p>
              <input
                value={name}
                onChange={this.onPersonNameChange}
                type="text"
                placeholder="Your Name"
                className="name-input-field"
              />
              <textarea
                placeholder="Your Comment"
                value={comment}
                onChange={this.onCommentChange}
                className="textarea-input"
                cols="50"
                rows="10"
              />
              <button type="submit" className="submit-btn">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-img"
            />
          </div>
          <hr />
          <p className="count-paragraph">
            <span className="comment-count">{UserDetailsList.length}</span>{' '}
            comments
          </p>
          <ul className="list-item-container">
            {UserDetailsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                eachComment={eachComment}
                initialClassName={eachComment.initialClassName}
                onCommentLike={this.onCommentLike}
                onCommentDelete={this.onCommentDelete}
              />
            ))}
          </ul>
        </div>
        .
      </div>
    )
  }
}
export default Comments
