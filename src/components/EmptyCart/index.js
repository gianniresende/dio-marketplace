import React from 'react';
import Feathericon from 'react-native-vector-icons/Feather';

import { Container, EmptyCartText } from './styles';

export default function EmptyCart() {
  return (
    <Container>
      <Feathericon name="slash" size={38} color="#f3f9ff" />
      <EmptyCartText>Seu Carrinho está vazio</EmptyCartText>
    </Container>
  );
}
