import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import CartItem from '../../components/CartItem'
import Container from '../../layout/Container'
import Title from '../../components/Title'

const Block = styled.div`
  display: flex;
  margin-top: 20px;

`

const Carts = styled.div`
  width: 70%;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  max-height: 400px;
  height: 100%;
  background: #fff;
  padding: 15px;
  border-radius: 16px;
`;
const Total = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: #000;
`; 
const TotalPrice = styled.p`
  font-weight: bold;
  font-size: 22px;
  color: #000;
`; 

const Button = styled.button`
  width: 100%;
  margin-top: auto;
  border: none;
  background: rgb(211, 245, 224);
  border-radius: 16px;
  line-height: 45px;
  font-size: 20px;
  color: #000;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
  margin-top: 50px;
`; 




const Cart = () => {
  const {cart} = useSelector((state)=>state)
  const items = Object.values(cart)
  const cartEmpty = items.length === 0
  const rest = () => window.real
  const total = items.reduce((acc,item)=> acc + item.price * item.quantity, 0)
  return (
    <>
      <Container>
        {cartEmpty ? <Title>Cart is empty 😢</Title> : <Title>Cart</Title> }
        <Block>
          <Carts>
            {!cartEmpty && (
              items.map((card)=> (
                <CartItem key={card.id} {...card}/>
              ))
            )}
          </Carts>
            {!cartEmpty && (
            <Item>
              <>
                <Content>
                  <Total>Total:</Total>
                  <TotalPrice>{total} сум</TotalPrice>
                </Content>
                <Button>send</Button>
              </>
            </Item>
            )}
        </Block>
      </Container>
    </>
  )
}

export default Cart