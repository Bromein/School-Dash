import styled from "styled-components";

export const WeatherBar = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  /* background-color: ${props => props.theme.darkGray}; */
  padding: 2rem;
  border-radius: 4px;

  .icon {
    height: 5rem;
    width: 5rem;
    margin: 0;
    padding: 0;

    fill: ${props => props.theme.accentOrange};
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;

  div {
    font-size: 1.5rem;
    color: ${props => props.theme.textColor};
  }

  span {
    font-size: 1.2rem;
    color: ${props => props.theme.textColor};

    @media (max-width: 600px) {
      display: none;
    }
  }
`;
