import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { GiNewspaper } from 'react-icons/gi'
import { IoStatsChart } from 'react-icons/io5'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { MdAttachMoney } from 'react-icons/md'
import { Switch, Route } from 'react-router-dom'

let SideNavContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: start;

position:fixed;
padding:1rem;
margin:1rem;
border-radius: .5rem;
background-color:#262A48;
width: 15%;
height: 87vh;


`


let TopSection = styled.div`
padding: 1rem;
text-align: center;
font-size: 2rem;
border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color:#2C3050;

color: #fff;

`




let Ul = styled.div`
position: relative;
padding: 1rem;


`

let Icon = styled.i`
 padding: 2rem;
position: absolute;
color: #656D94;
font-size: 1.5rem;




`



let PageLi = styled.li`
cursor: pointer;
position: relative;
padding: 2rem;
width: 100%;
list-style: none;
color: #656D94;
font-size: 1.5rem;
padding-left: 5rem;
&:hover{
    background-color: #222540;
    color: #000;
}
/* text-align: center; */
`




const SideNav = () => {
    return (
        <div>
            <SideNavContainer>
                <TopSection>GLP</TopSection>
                <Ul>


                    <Icon><AiOutlineHome /></Icon>
                    <NavLink to='/' exact activeClassName='active'>
                        <PageLi>Dashboard</PageLi>
                    </NavLink>



                    <Icon><GiNewspaper /></Icon>
                    <NavLink to='/News' exact activeClassName='active'>
                        <PageLi>News</PageLi>
                    </NavLink>



                    <Icon><IoStatsChart /></Icon>
                    <PageLi>Stats</PageLi>


                    <Icon><HiOutlineDocumentReport /></Icon>
                    <PageLi>SEC Filings</PageLi>


                    <Icon><MdAttachMoney /></Icon>
                    <PageLi>Analyst Rec</PageLi>

                </Ul>
            </SideNavContainer>







        </div>
    )
}

export default SideNav


//erros: 1. on hover, icons dissapear