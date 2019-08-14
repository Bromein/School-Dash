import styled from "styled-components";

export const SideNavContainer = styled.aside`
  background-color: ${props => props.theme.backgroundColor};
  grid-column: 1 / 2;
  min-height: 100vh;
  color: ${props => props.theme.textColor};
  ${props =>
    props.sidebar
      ? "display: flex; position: relative; left: 0;"
      : "position: absolute; left: -24rem;"};
  /* display: flex; */
  flex-direction: column;
  padding: 1rem;
  border-right: 1px solid ${props => props.theme.lightestGray};
  text-transform: uppercase;
  transition: left 0.2s ease-in-out;

  @media (max-width: 800px) {
    position: absolute;
    left: -24rem;
  }

  img {
    height: 3rem;
  }

  p {
    font-family: Montserrat;
    font-size: 3rem;
    padding: 2rem;
    text-align: center;
  }

  li {
    a {
      color: ${props => props.theme.textColor};
      flex: 1;
    }
    border-radius: 4px;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    svg {
      width: 2rem;
      margin-right: 1rem;
      fill: ${props => props.theme.textColor};
      &:hover {
      }
    }
    &:hover {
      background: ${props => props.theme.accentRed};
    }
  }

  div {
    justify-self: center;
    align-self: center;
    position: absolute;
    bottom: 0;
    p {
      margin: 1rem;
      font-size: 1.2rem;
      border-radius: 4px;
      background-color: ${props => props.theme.accentRed};
      cursor: pointer;
    }
  }
`;
