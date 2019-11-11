import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'emotion-theming'

import './Components/globalStyles'
import './styles.css'
import Sky from './Components/Sky'
import CelestialObject from './Components/CelestialObject'
import Title from './Components/Title'

// Define our themes: one for day and one for night
const dayTheme = {
  skyColor: '#37d8e6',
  celestialObjectColor: '#ffdd00',
  celestialObjectBorderColor: '#f1c40f'
}

const nightTheme = {
  skyColor: '#2c3e50',
  celestialObjectColor: '#bdc3c7',
  celestialObjectBorderColor: '#eaeff2'
}

// Main app
class App extends React.Component {
  constructor(props) {
    super(props)

    // Initial state: day time!
    this.state = {
      isDay: true,
      theme: dayTheme,
      title: 'Click the Sun to switch the theme'
    }
  }

  handleClick() {
    // Toggle day / night on click
    const isDay = !this.state.isDay

    this.setState({
      isDay: isDay,
      theme: isDay ? dayTheme : nightTheme,
      title: isDay ? 'Now click the Sun' : 'Now click the Moon'
    })
  }

  render() {
    // Wrap the entire content in a <ThemeProvider>
    return (
      <ThemeProvider theme={this.state.theme}>
        <Sky>
          <Title>{this.state.title}</Title>
          <CelestialObject onClick={() => this.handleClick()} />
        </Sky>
      </ThemeProvider>
    )
  }
}

render(<App />, document.getElementById('root'))
