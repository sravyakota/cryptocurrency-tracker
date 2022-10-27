/* eslint-disable react/no-unknown-property */
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoader: true, data: []}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      `https://apis.ccbp.in/crypto-currency-converter`,
    )
    const data = await response.json()
    console.log(data)
    const formattedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    this.setState({data: formattedData, isLoader: false})
  }

  render() {
    const {data, isLoader} = this.state

    return (
      <div className="currency-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="currency-image"
        />
        <ul className="currency-list">
          <li className="list-headings">
            <p className="para">Coin Type</p>
            <div className="usd-euro-details">
              <p className="para">USD</p>
              <p className="para">EURO</p>
            </div>
          </li>
          {isLoader ? (
            <div testid="loader">
              <Loader type="TailSpin" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            data.map(item => (
              <CryptocurrencyItem details={item} key={item.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
