import styled from "styled-components";

export const StyledCard = styled.div`
  ${props => props.full && "grid-column: 1 / -1;"};
  display: grid;
  margin: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: ${props => (props.footer ? "1fr 4fr 1fr" : "1fr 5fr")};
  background-color: ${props => props.theme.cardColor};
  color: ${props => props.theme.textColor};
  box-shadow: 0.1rem 0.1rem 0.1rem 0rem rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  text-align: center;
  user-select: none;
  @media (min-width: 1000px) {
    ${props => props.quarter && "grid-column: span 2"};
  }

  &:hover {
    transform: scale(1.01);
    box-shadow: 0.2rem 0.2rem 0.5rem 0.1rem rgba(0, 0, 0, 0.15);
  }
`;

export const CardTitle = styled.header`
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1 / -1;
  width: 100%;
  background-color: ${props =>
    props.money ? "#51ab57" : props.theme.lightGray};
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const CardContent = styled.section`
  align-self: center;
  justify-self: center;
  grid-column: 1 / -1;
  width: 100%;

  .legend {
    display: flex;
    justify-content: space-around;
    font-size: 2rem;
    padding: 1rem;
    text-decoration: underline;

    @media (max-width: 1000px) {
      display: none;
    }
  }

  .employee-breakdown {
    ${props =>
      props.stats && {
        // background: "red",
        display: "flex",
        alignItems: "space-around",
        justifyContent: "space-around",
        marginTop: "2rem"
      }}

    span:nth-child(even) {
      width: 50%;
      border-radius: 14px;
      background: ${props => props.theme.lightGray};
      &:hover {
        background: ${props => props.theme.lightestGray};
      }
    }
  }

  @media (max-width: 1000px) {
    .hire-date {
      display: none;
    }
  }
`;
export const CardFooter = styled.footer`
  justify-self: center;
  padding: 1rem;
  grid-column: 1 / -1;
`;

export const StyledGraphCard = styled.div`
  grid-column: 1 / -1;
  justify-self: center;
  display: flex;
  margin: 0 2rem;
  width: 100%;
  background-color: ${props => props.theme.cardColor};
  color: ${props => props.theme.textColor};
  box-shadow: 0.1rem 0.1rem 0.5rem 0.1rem rgba(0, 0, 0, 0.2);

  footer {
    width: 100%;
  }

  @media (max-width: 1000px) {
    width: 90%;
    flex-direction: column;
  }
`;

export const BigContent = styled.div`
  font-size: 5rem;
  color: ${props => props.theme.accentGreen};
`;
