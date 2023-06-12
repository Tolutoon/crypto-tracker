import React from 'react'

const Coinitem = (props) => {
  return (
    <div className='coin-row'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.coins.image} alt=''/>
            <p>{props.coins.symbol}</p>
        </div>
        <p>{props.coins.current_price}</p>
        <p>{props.coins.price_change_percentage_24h}</p>
        <p className='hide-mobile'>{props.coins.price_change_24}</p>
        <p className='hide-mobile'>{props.coins.market_cap}</p>
    </div>
  )
}

export default Coinitem;