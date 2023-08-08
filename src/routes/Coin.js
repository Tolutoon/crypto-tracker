import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './Coin.css';

const Coin = () => {

    const [coin, setCoin] = useState({});
    const params = useParams();

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

    useEffect(() => {
        axios
          .get(url)
          .then((res) => {
            setCoin(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

  return (
    <div>
        <div className='coin-container'>
            <div className='content'>
                <p>{coin.name}</p>
            </div>
            <div className='content'>
                <div className='rank'>
                    <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
                </div>
                <div className='info'>
                    <div className='coin-heading'>
                        {coin.image ?  <img src={coin.image.small} alt=''/> : null}
                        <p>{coin.name}</p>
                        {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Coin