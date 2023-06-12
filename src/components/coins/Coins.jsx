import React from 'react';
import Coinitem from './Coinitem';
import "./coins.css";

const Coins = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coins</p>
                <p>Price</p>
                <p>24hr</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt Cap</p>
            </div>

            {props.coins.map(coins => {
                return (
                    <Coinitem coins={coins} id={coins.id}/>
                )
            })}
        </div>
    </div>
  )
}

export default Coins;