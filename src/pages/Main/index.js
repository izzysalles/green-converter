import React from 'react';
import { Link } from 'react-router-dom';
import { Body, LeftBar, Container, Illustration } from './styles';
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
        <div className="content-div">
          <h1>GREEN CONVERTER</h1>
          <p>
            Seja bem-vindo ao Green Converter, uma aplicação desenvolvida para
            realizar conversões de dólar para real, mostrando sempre informações
            de cotação do dólar, IOF e impostos.
          </p>
          <div className="button-div">
            <Link to="/purchase">
              <Button>Comprar</Button>
            </Link>
          </div>
        </div>
        <Illustration>
          <img src={analytics} alt="Analytics icon" />
        </Illustration>
      </Container>
    </Body>
  );
}

export default Main;
