// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const getrenderDark = () => (
        <div className="about-container about-dark">
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
            alt="about"
          />
          <h1>About</h1>
        </div>
      )

      const getrenderLight = () => (
        <div className="about-container about-light">
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
            alt="about"
          />
          <h1>About</h1>
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

export default About
