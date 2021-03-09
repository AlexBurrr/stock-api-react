import React from 'react'
import styled from 'styled-components'



let ChartContainer = styled.div`
position: relative;
display: flex;
top: 5rem;
align-content: center;
align-items: center;
left: 5.5rem;

/* left:7rem; */

width: 90%;
height: 42rem;
background-color: red;
color: black;
text-align: center;
`



const StockChart = ({ text }) => {



    return (
        <div>
            <ChartContainer>
                {text}
            </ChartContainer>




        </div>
    )
}

export default StockChart
