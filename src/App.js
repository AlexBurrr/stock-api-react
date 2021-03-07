import './App.css';
import Home from './pages/Home'
import Nav from './components/Nav'
import styled from 'styled-components'
import SideNav from './components/SideNav'
import Dashboard from './pages/Dashboard'


let Container = styled.div`
padding: 3rem;
background-color: #222540;
min-height: 200rem;


`

function App() {

  return (
    <Container>
      <Nav />
      <SideNav />
      <Dashboard />

      <Home />
    </Container>

  );
}

export default App;
