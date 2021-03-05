import React from 'react'
import axios from 'axios'

const Home = () => {

    let stock = 'FGEN'
    let key = 'XFQMEZGTK4PCZO3HKDM1AWE6YDF1GEEB'
    let periodLength = 'year'


    axios.get(`https://api.tdameritrade.com/v1/marketdata/${stock}/pricehistory`, {
        params: {
            apikey: key,
            periodType: periodLength,
            period: 1,
            frequencyType: 'daily',
            frequency: 1,
            endDate: 1614758400000,
            startDate: 1614672000000,
            needExtendedHoursData: false
        }
    })
        .then((response) => console.log(response))
        ;




    return (
        <div>
            hi
        </div>
    )
}

export default Home
