// Write your code here

import {Component} from 'react'
import './index.css'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    tossResultImage: headsImage,
  }

  tossCoin = () => {
    const {headsCount, tailsCount} = this.state
    let tossImage = ''
    let updateHeadsCount = headsCount
    let updateTailsCount = tailsCount
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult % 2 === 0) {
      tossImage = headsImage
      updateHeadsCount = headsCount + 1
    } else {
      tossImage = tailsImage
      updateTailsCount = tailsCount + 1
    }

    this.setState({
      tossResultImage: tossImage,
      headsCount: updateHeadsCount,
      tailsCount: updateTailsCount,
    })
  }

  render() {
    const {headsCount, tailsCount, tossResultImage} = this.state
    return (
      <div className="bg-color">
        <div className="coin-card padding">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="coin" />
          <div>
            <button type="button" className="btn" onClick={this.tossCoin}>
              Toss Coin
            </button>
          </div>
          <div className="span">
            <p>Total:{headsCount + tailsCount}</p>
            <p>Heads:{headsCount}</p>
            <p>Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
