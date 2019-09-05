import styled from "styled-components";

export const StyledWeatherPage = styled.div`
  padding: 0 2rem;
  grid-column: ${props => (props.sidebar ? "2 / -1" : "1 / -1")};
  display: grid;
  grid-template-rows: 3rem 5rem;
  grid-auto-rows: minmax(20rem, auto);
  grid-template-columns: repeat(2, minmax(20rem, 1fr));
  overflow-y: scroll;
  @media (min-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(15%, 25%));
    grid-auto-rows: 25%;
  }
  @media (max-width: 800px) {
    grid-column: 1 / -1;
  }
`;

export const WeatherTitle = styled.h1`
  grid-column: 1 / -1;
  font-family: OpenSansCondensed;

  font-size: 5rem;
  align-self: center;
  justify-self: center;
  padding-bottom: 5rem;
  text-transform: capitalize;
`;

// export const WeatherContent = styled.div`
//   grid-column: 1 / -1;
//   display: flex;
//   justify-content: space-around;
//   background: red;
// `;

export const WeatherCard = styled.div`
  padding: 0 0rem;
  margin: 1rem;
  background: ${props => props.theme.cardColor};
  border-radius: 4px;
  display: grid;
  align-items: center;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-rows: 5rem 5rem 5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  span {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    padding: 2rem;
  }
`;

export const DayTitle = styled.div`
  grid-column: 1 / -1;
  align-self: start;
  background-color: ${props => props.theme.accentOrange};
  width: 100%;
  justify-self: center;
  border-radius: 4px 4px 0 0;
  font-size: 1.75rem;
  text-align: center;
  letter-spacing: 0.2rem;
  font-family: OpenSansCondensed;
`;

export const WeatherSummary = styled.div`
  grid-column: 2 / 3;
  padding-top: 1rem;
`;
export const WeatherTemperature = styled.div`
  grid-column: 1 / -1;
  align-self: center;
  justify-self: center;
`;
