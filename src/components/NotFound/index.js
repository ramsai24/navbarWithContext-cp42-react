// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const getrenderDark = () => (
        <div className="notFound-container notFound-dark">
          <img
            className="not-found-img"
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
          />
          <h1>Lost Your Way</h1>
          <p>We cannot seem to find the page</p>
        </div>
      )

      const getrenderLight = () => (
        <div className="notFound-container notFound-light">
          <img
            className="not-found-img"
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
          />
          <h1>Lost Your Way</h1>
          <p>We cannot seem to find the page</p>
        </div>
      )

      return (
        <div>
          <Navbar />
          {isDarkTheme ? getrenderDark() : getrenderLight()}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
