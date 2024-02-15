import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Container from '../../layout/Container'
import Logo from '../../images/Svgs/Logo'
import halal from '../../images/halal.png'
import { getItemsCount } from '../../redux/cart'


const Block = styled.header`
  background: #fff;
  padding: 10px 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Retting = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;

  & svg{
    color: #FFA800;
    font-size: 20px;
    padding-right: 5px;
  }

  & span{
    line-height: 0.9;
    font-weight: 400;
    font-size: 14px;
    max-width: 20vh;
    padding-left: 5px;
  }
`;

const Tell = styled.a`
  font-size: 28px;
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;

  & svg{
    color: rgb(0, 171, 73);
    font-size: 20px;
    padding-right: 7px;
  }

  & span{
    line-height: 0.9;
    font-weight: 400;
    font-size: 14px;
    max-width: 25vh;
    padding-left: 7px;
    color: rgb(0, 171, 73);
  }
`;

const HalalImg = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
`;

const Button = styled.button`
  background: rgb(190, 45, 43);
  min-width: 55px;
  height: 55px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #fff;
  border: none;
  cursor: pointer;
  text-decoration: none;
  & svg {
    font-size: 14px;
  }
  
  & span{
    font-size: 20px;
    font-weight: bold;
  }
`

const Header = () => {
  const cartItemsCount = useSelector(getItemsCount)
  return (
    <Block>
      <Container>
        <HeaderContainer>
          <Logo/>
          <Retting> <FontAwesomeIcon icon={faStar}/> 4.7/5 <span>cредняя оценка за неделю</span></Retting>
          <Tell> <FontAwesomeIcon icon={faPhone}/>1174<span>бесплатная доставка за 45 минут или пицца в подарок</span> </Tell>
          <HalalImg src={halal} alt="Halal Logo" />
          <Button as={Link} to="cart"> <FontAwesomeIcon icon={faShoppingCart}/> <span>{cartItemsCount && cartItemsCount}</span></Button>
        </HeaderContainer>
      </Container>
    </Block>
  )
}

export default Header