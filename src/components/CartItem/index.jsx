import React from 'react';
import { useDispatch } from 'react-redux';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import {faTrashCan} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { addOne, removeFromCart, removeOne } from '../../redux/cart';


const Block = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 16px;
  padding: 28px;
`

const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.h6`
  font-size: 18px;
  font-weight: bold;
  flex-grow: 1;
  text-align: left;
`

const Controller = styled.div`
  width: 120px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(211, 245, 224);
  padding: 15px;
  margin: 0 40px;
`

const Btn = styled.button`
  border-radius: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background: none;
`

const Amount = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`

const Price = styled.p`
  text-align: center;
  font-weight: bold;
  color: #000;
  font-size: 22px;
`

const Trash = styled.button`
  font-size: 22px;
  border: none;
  cursor: pointer;
  background: none;
`

const CartItem = ({image,name,id,price,quantity}) => {
  const dispatch = useDispatch()
  const totalPrice = price * quantity

  const handlePlus = () => dispatch(addOne(id))
  const handleMinus = () => dispatch(removeOne(id))
  const handleRemove = () => dispatch(removeFromCart(id))
  return (
    <Block>
      <Img src={image} alt={name} />
      <Name>{name}</Name>
      <Price>{totalPrice} сум</Price>
      <Controller>
        <Btn onClick={handleMinus}><FontAwesomeIcon icon={faMinus}/></Btn>
        <Amount>{quantity}</Amount>
        <Btn onClick={handlePlus}><FontAwesomeIcon icon={faPlus}/></Btn>
      </Controller>
      <Trash onClick={handleRemove}><FontAwesomeIcon icon={faTrashCan}/> </Trash>
    </Block>
  )
}

export default CartItem