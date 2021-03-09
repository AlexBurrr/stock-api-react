import './App.css';
import Home from './Pages/Home'
import News from './Pages/News'
import Nav from './components/Nav'
import styled from 'styled-components'
import Dashboard from './Pages/Dashboard'
import { Switch, Route } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { GiNewspaper } from 'react-icons/gi'
import { IoStatsChart } from 'react-icons/io5'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { MdAttachMoney } from 'react-icons/md'



let Container = styled.div`
padding: 3rem;
background-color: #222540;
min-height: 200rem;
`
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




function App() {

  return (
    <Container>
      <Nav />

      <div>
        <SideNavContainer>
          <TopSection>GLP</TopSection>
          <Ul>
            <Switch>
              <Route path='/' exact>
                <Icon><AiOutlineHome /></Icon>
                <PageLi>Dashboard</PageLi>
              </Route>
              <Route path='/News' exact>
                <Icon><GiNewspaper /></Icon>
                <News />
                <PageLi>News</PageLi>
              </Route>
              <Route path='/' exact>
                <Icon><IoStatsChart /></Icon>
                <PageLi>Stats</PageLi>
              </Route>
              <Route path='/' exact>
                <Icon><HiOutlineDocumentReport /></Icon>
                <PageLi>SEC Filings</PageLi>
              </Route>
              <Route path='/' exact>
                <Icon><MdAttachMoney /></Icon>
                <PageLi>Analyst Rec</PageLi>
              </Route>
            </Switch>
          </Ul>
        </SideNavContainer>
      </div>




      <Dashboard />



      <Home />
    </Container>

  );
}

export default App;
