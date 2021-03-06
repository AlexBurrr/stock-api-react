import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import * as param from '../DATA/parameters'




//https://www.highcharts.com/blog/download/ chart lib

const Home = () => {
    //STATE
    let [stocks, setStock] = useState(null)


    useEffect(() => {
        axios.get(param.priceHistoryURL, {
            params: param.priceHistoryParams
        })
            .then(response => {
                setStock(response.data.candles);
            })
    }, [])


    let itemsToRender;
    if (stocks) {
        itemsToRender = stocks.map((stock, index) => {
            return (
                <div key={index}>
                    {stock.close}
                </div>
            )
        })
    }



    return (
        <div>
            {/* {itemsToRender} */}
        </div>
    )
}

export default Home
