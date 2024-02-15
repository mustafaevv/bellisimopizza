import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cart';

const Block = styled.div`
  margin-top: 50px;
  background: #fff;
  max-width: 360px;
  height: 480px;
  border-radius: 16px;
  padding-bottom: 20px;
  transition: 0.4s transform;
  box-shadow: 0 0 10px #fff;
  display: flex;
  flex-direction: column;

  &:hover{
    transform: scale(1.1);
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 16px;
  margin-bottom: 10px;
`;
const Name = styled.h5`
  font-weight:600;
  font-size: 22px;
  padding: 0 16px;
  margin-bottom: 5px;
`;
const Desc = styled.p`
  font-size: 14px;
  line-height: 14px;
  color: rgb(128, 128, 128);
  padding: 0px 16px;
  margin-bottom: 10px;
`;
const Price = styled.p`
  font-weight: bold;
  font-size: 24px;
  padding: 0px 16px;
  color: rgb(50, 50, 50);
  margin-bottom: 20px;
  margin-top: auto;

`;
const Button = styled.button`
  width: 90%;
  box-shadow: rgb(0 171 73 / 25%) 0px 5px 10px;
  margin-right: 15px;
  margin-left: 15px;
  line-height: 50px;
  border-radius: 16px;
  background: ${({select})=>select ? "none" : 'rgb(0, 171, 73)'};
  border: ${({select})=>select ? 'rgb(0, 171, 73)' : 'none'};
  color: ${({select})=>select ? "rgb(0, 171, 73)": '#fff'};
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: 0.5 background, 0.5s color;


  & svg{
    margin-right: 10px;
  }
`;

const Product = ({data,select}) => {
  const dispatch = useDispatch()
  const handleSelect = () => {
    dispatch(select ? removeFromCart(data.id) : addToCart(data))
  }

  return (
    <Block>
      <Img src={data.image} alt={data.name} />
      <Name>{data.name}</Name>
      <Desc>{data.description}</Desc>
      <Price>{data.price} сум</Price>
      <Button onClick={handleSelect}
        select={select}
      >
        <FontAwesomeIcon icon={faShoppingCart}/> 
        Заказать
      </Button>
    </Block>
  )
}

export default Product