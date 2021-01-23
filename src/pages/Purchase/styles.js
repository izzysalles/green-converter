import styled from 'styled-components';

export const Body = styled.div`
  min-height: 100%;
  min-width: 100%;
  height: 100%;
  width: 100%;
  display: flex;
`;

export const LeftBar = styled.div`
  max-height: 100%;
  max-width: 90px;
  padding-top: 10px;
  background-color: #1cb34b;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  img {
    width: 60px;
    height: 60px;
  }
`;

export const Container = styled.div`
  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  width: 100%;
  background: #f9f9fc;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;

  .button-div {
    width: 100%;
  }
`;

export const Elements = styled.div`
  font-family: 'Roboto', sans-serif;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 35px;
  width: 100%;
  max-width: 1200px;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    margin: 0px 10px;
  }
`;

export const Content = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 1200px) {
    padding: 0;
    margin-top: 10px;
    margin-left: 10px;
  }

  .arrow {
    margin: 0 54px;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  font-weight: 700;
  color: #2d2f3b;
  margin-bottom: 50px;
  white-space: nowrap;
  @media only screen and (max-width: 1200px) {
    font-size: 40px;
  }
`;

export const ExchangeRate = styled.div`
  display: flex;
  flex-direction: row;

  img {
    height: 60px;
    width: 60px;
  }
`;

export const ConvertCurrency = styled.div`
  display: flex;
  flex-direction: row;

  .convert {
    display: flex;
    flex-direction: column;

    input {
      border: 4px solid #737373;
      border-radius: 20px;
      font-size: 20px;
      color: #2d2f3b;
      text-align: center;
      margin-bottom: 10px;
      padding: 7px 7px;

      ::placeholder {
        color: #d5d5d5;
      }
    }
  }
`;

export const Info = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: #2d2f3b;
  margin-right: 35px;
  text-align: right;
`;

export const Currency = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 4px solid #737373;
  border-radius: 4px;
  margin-bottom: 80px;
`;

export const Value = styled.span`
  font-size: 40px;
  font-weight: 500;
  color: #2d2f3b;
  margin-left: 50px;
`;
