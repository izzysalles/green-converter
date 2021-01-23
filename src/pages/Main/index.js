import React from 'react';
import { Link } from 'react-router-dom';
import { Body, LeftBar, Container, Elements, Illustration, Title, Description } from './styles';
import Button from '../../styles/Button';
import analytics from '../../assets/images/analytics.png';
import exchange from '../../assets/images/exchange.png';

function Main() {
  return (
    <Body>
      <LeftBar>
        <img src={exchange} alt="Exchange icon" />
      </LeftBar>
      <Container>
        <Elements>
          <div className="content-div">
            <Title>GREEN CONVERTER</Title>
            <Description>
              Seja bem-vindo ao Green Converter, uma aplicação desenvolvida para
              realizar conversões de dólar para real, mostrando sempre
              informações de cotação do dólar, IOF e impostos.
            </Description>
            <div className="button-div">
              <Link to="/purchase">
                <Button>Comprar</Button>
              </Link>
            </div>
          </div>
          <Illustration>
            <img src={analytics} alt="Analytics icon" />
          </Illustration>
        </Elements>
      </Container>
    </Body>
  );
}

export default Main;
