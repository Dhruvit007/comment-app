import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './index.css'

const CommentItem = props => {
  const {eachComment, initialClassName, onCommentLike, onCommentDelete} = props
  const {id, name, comment, isLiked, addedTime} = eachComment
  const commentTime = formatDistanceToNow(addedTime)
  const imgUrl = !isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const imgClass = isLiked ? 'liked-name-paragraph' : ''

  const onLikeClick = () => {
    onCommentLike(id)
  }
  const onDelete = () => {
    onCommentDelete(id)
  }
  return (
    <li className="li">
      <div className="list-item">
        <p className={`comment-person-icon ${initialClassName}`}>{name[0]}</p>
        <div className="comment-name-container">
          <div className="comment-person-name-container">
            <p className="comment-person-name">{name}</p>
            <p className="comment-time">{commentTime}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="comment-like-container">
        <div className="like-image-container">
          <button type="button" onClick={onLikeClick} className="like-btn">
            <img alt="like" src={imgUrl} className="like-image" />
          </button>
          <p className={`like-name-paragraph ${imgClass}`}>Like</p>
        </div>
        <button type="button" onClick={onDelete} className="like-btn">
          <img
            className="delete-image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="hr-line" />
    </li>
  )
}

export default CommentItem
