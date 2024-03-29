// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onClickSubscribeButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="bg-container">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button
          type="button"
          className="subscribe-button"
          onClick={this.onClickSubscribeButton}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
