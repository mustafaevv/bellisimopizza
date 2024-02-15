import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components'

import Container from '../../layout/Container'
import Product from '../../components/Product'
import links from '../../router'
import { useSelector } from 'react-redux'

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Category = () => {
  const { pathname } = useLocation();
  const {type} = useParams()
  const [data,setData] = useState(null)
  const {cart:cartItems} = useSelector((state)=>state)
  const {name: title}  = links.find((item) => item.link === pathname);
  useEffect(()=>{
    const fetchData = async ()=>{
      const data = await fetch(`https://659528f804335332df8215ee.mockapi.io/apis/products?category=${type}`)
      const cards = await data.json()
      setData(cards)
    }
    fetchData()
  },[type])
  return (
    <Container>
      <h1>{title && title}</h1>
      <Card>
        {data && data.map(card => <Product key={card.id} data={card} select={card.id in cartItems}/>)}
      </Card>
    </Container>
  )
}

export default Category
