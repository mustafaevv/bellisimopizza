import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Product from '../../components/Product'
import Container from '../../layout/Container'

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Home = () => {
  const [data,setData] = useState(null)
  const {cart:cartItems} = useSelector((state)=>state)
  useEffect(()=>{
    const fetchData = async ()=>{
      const data = await fetch(`https://659528f804335332df8215ee.mockapi.io/apis/products`)
      const cards = await data.json()
      setData(cards)
    }
    fetchData()
  },[])
  return (
    <Container>
      <Card>
        {data && data.map(card => <Product key={card.id} data={card} select={card.id in cartItems}/>)}
      </Card>
    </Container>
  )
}

export default Home

//select={card.id in cartItems}