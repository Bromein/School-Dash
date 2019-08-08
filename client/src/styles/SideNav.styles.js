import styled from "styled-components";

export const SideNavContainer = styled.aside`
  background-color: rgba(0, 0, 0, 0.87);
  grid-column: 1 / 2;
  min-height: 100vh;
  color: #ebebeb;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 5px 10px 3px rgba(0, 0, 0, 0.75);

  @media (max-width: 800px) {
    display: none;
  }

  p {
    font-family: PlayfairDisplay;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1rem;
    text-align: center;
  }

  li {
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
    svg {
      width: 2rem;
      margin-right: 1rem;
      fill: #ebebeb
      &:hover {
      }
    }
  }

  span {
    position: fixed;
    bottom: 0;
  }
`;
