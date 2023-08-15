// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const getDarkTheme = () => (
        <div className="nav-container dark">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
            alt="website logo"
          />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <button data-testid="theme" type="button" onClick={toggleTheme}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="theme"
            />
          </button>
        </div>
      )

      const getLightTheme = () => (
        <div className="nav-container light">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            alt="website logo"
          />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <button data-testid="theme" type="button" onClick={toggleTheme}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="theme"
            />
          </button>
        </div>
      )

      return <nav>{isDarkTheme ? getDarkTheme() : getLightTheme()}</nav>
    }}
  </ThemeContext.Consumer>
)

export default Navbar
