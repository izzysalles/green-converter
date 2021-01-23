import React from 'react';
import {
  Body,
  LeftBar,
  Container,
  Elements,
  Content,
  Info,
  Value,
  Title,
  Currency,
  ExchangeRate,
  ConvertCurrency,
} from './styles';
import Button from '../../styles/Button';
import exchange from '../../assets/images/exchange.png';
import usa from '../../assets/images/usa.png';
import arrow from '../../assets/images/right-arrow.png';
import brazil from '../../assets/images/brazil.png';

function Purchase() {
  return (
    <Body>
      <LeftBar>
        <img src={exchange} alt="Ícone de Troca" />
      </LeftBar>
      <Container>
        <Elements>
          <Content>
            <Title>Conversão de Moeda</Title>
            <ExchangeRate>
              <Info>Cotação do dia</Info>
              <Currency>
                <img src={usa} alt="Bandeira dos Estados Unidos" />
                <Value>U$1,00</Value>
              </Currency>
              <img src={arrow} className="arrow" alt="Seta para a esquerda" />
              <Currency>
                <img src={brazil} alt="Bandeira do Brasil" />
                <Value>R$5,30</Value>
              </Currency>
            </ExchangeRate>

            <ConvertCurrency>
              <Info>Converter Moeda</Info>
              <div className="convert">
                <input placeholder="Valor em Dólar" />
                <input placeholder="Taxa do Estado" />
              </div>
            </ConvertCurrency>

            <div>
              <Info>Método Pagamento</Info>
              <div>
                <input type="radio" value="Dinheiro" /> Dinheiro
                <input type="radio" value="Cartão" /> Cartão
              </div>
            </div>
            <div className="button-div">
              <Button>Comprar</Button>
            </div>
          </Content>
        </Elements>
      </Container>
    </Body>
  );
}

export default Purchase;
