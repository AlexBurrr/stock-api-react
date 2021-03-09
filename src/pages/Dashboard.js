import React from 'react'
import styled from 'styled-components'
import StockChart from '../components/StockChart';

let DashboardContainer = styled.div`
    margin: 1rem;

    left: 28rem;
    position: absolute;
    background-color: #272A48;
    height: 800px;
    width: 77%;
    color: red;
    border-radius: .5rem;
`

let About = styled.section`
position: relative;
background-color: red;
width: 90%;
height: 20rem;
top: 8rem;
left: 5.5rem;
`

const Dashboard = () => {
    return (
        <div>
            <DashboardContainer>
                <StockChart text={'Dashboard'} />
                <About />
            </DashboardContainer>
        </div>
    )
}

export default Dashboard
