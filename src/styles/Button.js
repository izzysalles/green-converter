import styled, { css } from 'styled-components';

const sizes = {
  default: css`
    height: 38px;
    width: 120px;
    font-size: 15px;
  `,
};

const colors = {
  default: css`
    background: #1cb34b;
    color: #ffffff;
  `,
};

const Button = styled.button.attrs(({ type = 'button' }) => ({
  type,
}))`
  border-radius: 30px;
  font-size: 12px;
  padding: 0px;
  font-weight: 700;
  border: 3px solid #1cb34b;
  font-family: 'Roboto', sans-serif;

  ${(props) => sizes[props.size || 'default']};
  ${(props) => colors[props.colors || 'default']};
`;

export default Button;
