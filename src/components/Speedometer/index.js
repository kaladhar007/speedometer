// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count + 10 > 200) {
      this.setState({count: 200})
    } else {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count - 10 < 0) {
      this.setState({count: 0})
    } else {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="body">
        <div className="content">
          <h1>SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image_class"
          />

          <h1>Speed is {count}mph</h1>
          <p>Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button type="button" className="button" onClick={this.onIncrement}>
              accelerate
            </button>
            <button type="button" className="button" onClick={this.onDecrement}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ClickCounter
