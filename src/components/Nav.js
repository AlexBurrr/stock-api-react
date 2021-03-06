import React from 'react'
import styled from 'styled-components';



const Nav = () => {

    let Nav = styled.nav``;

    let NavContainer = styled.div`
        display: flex;
        align-items: center;
        list-style:none;
        width: 100%;
    `;

    let NavLogo = styled.div`
        justify-content: left;
        font-size:2rem;
        padding-left: 10rem;
    `;

    let NavUl = styled.ul`
        display: inherit;
        
        font-size:3rem;
        list-style:inherit;
        padding-left:32%;
        

    `;


    let Navli = styled.li`
    padding:2rem;
    background-color: red;
    transition: 0.3s ease-in-out;

    &:hover{
        background-color:blue;
    }
    

    
        
    `;

    let SignUpOrRegisterUl = styled.ul`
        display:inherit;
        list-style:inherit;
        padding-left:30%;
        
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


    return (
        <div>
            <Nav>
                <NavContainer>
                    <NavLogo>
                        GLP
                    </NavLogo>
                    <NavUl>
                        <Navli>hi</Navli>
                        <Navli>hi</Navli>
                        <Navli>hi</Navli>
                    </NavUl>
                    <SignUpOrRegisterUl>
                        <SignUpOrRegisterLi>Sign In</SignUpOrRegisterLi>
                        <SignUpOrRegisterLi>Sign Up</SignUpOrRegisterLi>
                    </SignUpOrRegisterUl>
                </NavContainer>
            </Nav>
        </div>
    )
}

export default Nav
