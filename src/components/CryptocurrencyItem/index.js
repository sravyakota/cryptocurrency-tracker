import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = details

  return (
    <li className="list-items">
      <div className="usd-euro-details">
        <img src={currencyLogo} alt={currencyName} className="logos" />
        <p className="para">{currencyName}</p>
      </div>

      <div className="usd-euro-details">
        <p className="para">{usdValue}</p>
        <p className="para">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
