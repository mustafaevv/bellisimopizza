import React from 'react'
import styled from 'styled-components'
import Container from '../../layout/Container';

const Item = styled.div`
  margin-top: 5em;
  margin-bottom: 5em;
`;
const Title = styled.h4`
  color: rgb(64, 64, 64);
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1em;
`;
const Text = styled.p`
  font-size: 18px;
  flex-wrap: 400;
  line-height: 1;
  max-width: 100vh;
  
`;

const Description = () => {
  return (
    <Container>
      <Item>
        <Title>Bellissimo Pizza - 45 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО</Title>
        <Text>Не успели доставить за 45 минут? Отправим вам смс-код на бесплатную среднюю пиццу. Мы ценим ваше время: гарантируем скорость и качество!</Text>
      </Item>
    </Container>
  )
}

export default Description