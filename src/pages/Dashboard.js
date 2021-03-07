import React from 'react'
import styled from 'styled-components'

let DashboardContainer = styled.div`
    margin: 1rem;

    left: 28rem;
    position: absolute;
    background-color: #272A48;
    height: 800px;
    padding-left: 20%;
    width: 77%;
    color: red;
    border-radius: .5rem;

`

const Dashboard = () => {
    return (
        <div>
            <DashboardContainer>
                hi
            </DashboardContainer>
        </div>
    )
}

export default Dashboard
