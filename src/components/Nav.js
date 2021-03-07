import React from 'react'
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';


let NavDiv = styled.nav`
border-width: 1px;
border-color: #2B3050;
border-style: solid;
border-radius: 1px;



`;

let NavContainer = styled.div`
    display: flex;
    position: sticky;
    align-items: center;
    list-style:none;
    width: 100%;
    background-color: #262A48;
    color: #228FF5;
   
    
`;

let NavLogo = styled.div`
    justify-content: left;
    font-size:2rem;
    padding-left: 3rem;
    color: #fff;
    transition: .3s ease-in-out;

    &:hover{
        color:#228FF5
    }
`;

let NavUl = styled.ul`
    display: inherit;
    position:absolute;
    
    font-size:3rem;
    list-style:inherit;
    padding-left:15%;
    
    

`;

let SearchInput = styled.input`
border: none;
color: #676D95;
position: relative;
width: 35rem;
padding:1rem;
background-color:#232540;
border-left-style: solid;
border-left-color:#2C3050;
border-left-width: 1px;
padding-left:4rem;

textarea:focus, &:focus{
outline: none;
}


`


let SignUpOrRegisterUl = styled.ul`
    display:inherit;
    list-style:inherit;
    padding-left:70%;
    
`
let SignUpOrRegisterLi = styled.li`
margin: 1rem;
padding: 1rem;
transition: 0.3s ease-in-out;
border-radius: .5rem;

&:hover{
    background-color: blue;
}

`



let Icon = styled.i`
    position: absolute;
    color: #676D95;
    height:2rem;
    width: 2rem;
    
`



const Nav = () => {
    return (
        <div>
            <NavDiv>
                <NavContainer>
                    <NavLogo>
                        Good Luck, Partner
                    </NavLogo>
                    <NavUl>
                        <SearchInput type='text' placeholder='Search...' />
                        <Icon><AiOutlineSearch /></Icon>

                    </NavUl>
                    <SignUpOrRegisterUl>
                        <SignUpOrRegisterLi>Sign In</SignUpOrRegisterLi>
                        <SignUpOrRegisterLi>Sign Up</SignUpOrRegisterLi>
                    </SignUpOrRegisterUl>
                </NavContainer>
            </NavDiv>
        </div>
    )
}

export default Nav
