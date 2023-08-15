// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const getrenderDark = () => (
        <div className="home-container home-dark">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
            alt="home"
          />
          <h1>Home</h1>
        </div>
      )

      const getrenderLight = () => (
        <div className="home-container home-light">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
            alt="home"
          />
          <h1>Home</h1>
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

export default Home
