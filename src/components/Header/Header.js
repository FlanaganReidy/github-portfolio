import React from 'react';
import logo from 'C:\\Users\\shann\\Documents\\dev\\react-testspace\\Git-hub-portofio\\github-portfolio\\src\\GitHub-Mark-64px.png';
import styled from 'styled-components';


 const HeaderWrapper = styled.div`
 background-color: #282c34;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: calc(10px + 2vmin);
 color: white;
 padding: 2vmin 2rem;
 `;
 const Logo = styled.img`
  pointer-events: none;
`;
 


const Header = () => {

    return(
    <HeaderWrapper>
    <Logo src={logo} alt="logo" />
    <h1> Shannon Reidy</h1>
    <h3> Github Portfolio</h3>
    </HeaderWrapper>
    );
}

export default Header;