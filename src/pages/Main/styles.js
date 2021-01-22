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

  h1 {
    font-size: 60px;
    font-weight: 700;
    color: #2d2f3b;
    margin-bottom: 20px;
    @media only screen and (max-width: 1200px) {
      font-size: 40px;
    }
  }

  p {
    font-size: 20px;
    color: #707070;
    margin-bottom: 20px;
    @media only screen and (max-width: 1200px) {
      font-size: 15px;
    }
  }

  .content-div {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    @media only screen and (max-width: 1200px) {
      padding: 0;
      margin-top: 100px;
      margin-left: 10px;
    }
  }

  .button-div {
    width: 100%;
  }

  .signin {
    margin-left: 20px;
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
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  box-sizing: border-box;
  display: flex; 
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    margin: 0px 10px;
  }
`;

export const Illustration = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 35px;

  img {
    @media only screen and (min-width: 1200px) {
      width: 600px;
      height: auto;
    }
    width: 100%;
    height: auto;
  }
`;
