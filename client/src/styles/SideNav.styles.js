import styled from "styled-components";

export const SideNavContainer = styled.aside`
  background-color: rgba(0, 0, 0, 0.87);
  grid-column: 1 / 2;
  min-height: 100vh;
  color: #ebebeb;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 3px 5px 1px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  left: 0;
  transition: all 0.2s ease-in-out;

  @media (max-width: 800px) {
    position: absolute;
    left: -24rem;
  }

  p {
    font-family: PlayfairDisplay;
    font-size: 2rem;

    padding: 1rem;
    text-align: center;
  }

  li {
    a {
      color: #ebebeb;
      flex: 1;
    }
    border-radius: 4px;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem;
    svg {
      width: 2rem;
      margin-right: 1rem;
      fill: #ebebeb
      &:hover {
      }
    }
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  span {
    position: fixed;
    bottom: 0;
  }
`;
