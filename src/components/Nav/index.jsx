import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";

import Container from '../../layout/Container'
import links from '../../router'

const NavLinks = styled.nav`
  background: rgb(190, 45, 43);
  box-shadow: rgb(234 46 46 / 20%) 0px 10px 15px;
  border-radius: 16px;
  margin-top: -15px;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 20px 8px;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  padding: 16px 25px;
  transition: 0.3s background, 0.3s color;
  border-radius: 8px;
  color: ${({location})=> !location ? 'rgb(190, 45, 43)':'#fff'};
  background: ${({location})=> !location ? '#fff' : 'none'};

  &:hover{
    background: #fff;
    color: rgb(190, 45, 43);
    border-radius: 8px;
  }
`;

const Nav = () => {
  const location = useLocation()
  return (
    <Container>
      <NavLinks>
        <NavList>
          {links.map((link,i) => (
            <li key={i}>
              <NavLink 
                as={Link}
                to={link.link}
                location={location.pathname !== link.link}
                >
                  {link.name}
              </NavLink>
            </li>
          ) )}
        </NavList>
      </NavLinks>
      </Container>
  )
}

export default Nav