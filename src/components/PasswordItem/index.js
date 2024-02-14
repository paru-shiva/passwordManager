import './index.css'

const PasswordItem = props => {
  const {data, isChecked, onDeleteClicked} = props
  const {username, website, password, id} = data
  const iconLetter = website[0]

  const onDeleleteClick = () => {
    onDeleteClicked(id)
  }

  const passwd = isChecked ? (
    <p className="credentialsPara">{password}</p>
  ) : (
    <img
      className="starsImg"
      alt="stars"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
    />
  )

  return (
    <li>
      <div className="passwordItemComponent">
        <div className="componentLeft">
          <div className="icon">
            <p>{iconLetter}</p>
          </div>
          <div className="credentials">
            <p className="credentialsPara">{website}</p>
            <p className="credentialsPara">{username}</p>
            {passwd}
          </div>
        </div>
        <div className="deleteIconDiv">
          <button
            type="button"
            className="deleteButton"
            onClick={onDeleleteClick}
          >
            <img
              className="deleteIcon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default PasswordItem
