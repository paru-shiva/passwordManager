import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from './components/PasswordItem'
import './App.css'

class App extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    searchTag: '',
    userData: [],
  }

  onDeleteClick = id => {
    const {userData} = this.state
    const filteredUserData = userData.filter(eachItem => eachItem.id !== id)
    this.setState({userData: filteredUserData})
  }

  onWebsiteInput = event => {
    this.setState({website: event.target.value})
  }

  onUsernameInput = event => {
    this.setState({username: event.target.value})
  }

  onPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onSearchInput = event => {
    this.setState({searchTag: event.target.value})
  }

  onDataAddition = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newData = {website, username, password, id: uuidv4()}
    this.setState(prevState => ({
      userData: [...prevState.userData, newData],
      website: '',
      username: '',
      password: '',
      isChecked: false,
    }))
  }

  showHideClick = event => {
    this.setState({isChecked: event.target.checked})
  }

  render() {
    const {website, username, password, searchTag, userData, isChecked} =
      this.state

    console.log(this.state)

    const filteredData = userData.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchTag.toLowerCase()),
    )

    const noOfPasswords = filteredData.length

    console.log(filteredData)

    const showData =
      noOfPasswords > 0 ? (
        <ul type="none" className="passwordItems">
          {filteredData.map(eachItem => (
            <PasswordItem
              onDeleteClicked={this.onDeleteClick}
              isChecked={isChecked}
              key={eachItem.id}
              data={eachItem}
            />
          ))}
        </ul>
      ) : (
        <div className="noPasswordsDiv">
          <img
            className="noPasswordsImg"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
          />
          <p className="noPasswordsPara">No Passwords</p>
        </div>
      )

    return (
      <div className="appComponent">
        <div className="passwordManager">
          <img
            className="appLogo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <div className="topSection">
            <div>
              <form onSubmit={this.onDataAddition} className="passwordAdder">
                <h1>Add New Password</h1>
                <div className="websiteInput inputField">
                  <img
                    className="globeImage"
                    alt="website"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  />
                  <input
                    onChange={this.onWebsiteInput}
                    className="inputTag"
                    placeholder="Enter Website"
                    value={website}
                  />
                </div>
                <div className="websiteInput inputField">
                  <img
                    className="globeImage"
                    alt="username"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  />
                  <input
                    onChange={this.onUsernameInput}
                    className="inputTag"
                    placeholder="Enter Username"
                    value={username}
                  />
                </div>
                <div className="websiteInput inputField">
                  <img
                    className="globeImage"
                    alt="password"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  />
                  <input
                    onChange={this.onPasswordInput}
                    className="inputTag"
                    placeholder="Enter Password"
                    type="password"
                    value={password}
                  />
                </div>
                <button
                  data-testid="delete"
                  type="submit"
                  className="addButton"
                >
                  Add
                </button>
              </form>
            </div>
            <img
              className="passwordAdderImage"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
          <div className="bottomSection">
            <div className="bottomFirst">
              <div className="yourPasswordsWithNo">
                <h1>Your Passwords </h1>
                <p className='noOfPasswordsPara'>{noOfPasswords}</p>
              </div>
              <div>
                <div className="websiteInput inputField">
                  <img
                    className="globeImage"
                    alt="search"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  />
                  <input
                    type="search"
                    onChange={this.onSearchInput}
                    className="inputTag"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <hr className="rule" />
            <div className="showPasswordsCheck">
              <input
                onChange={this.showHideClick}
                className="showPasswordsCheck"
                id="showPw"
                type="checkbox"
              />
              <label htmlFor="showPw">Show Passwords</label>
            </div>
            <div className="passwordItems">{showData}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
