import styled from "styled-components";

export const StyledTopNav = styled.nav`
  grid-column: ${props => (props.sidebar ? "2 / -1" : "1 / -1")};
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  border-bottom: 1px solid ${props => props.theme.lightestGray};
  .pancake {
    height: 3rem;
    width: 3rem;
    fill: ${props => props.theme.lightestGray};
    /* border: 2px solid ${props => props.theme.lightestGray}; */
    border-radius: 4px;
    transition: all 0.2s ease-in-out;

    &:hover {
      fill: ${props => props.theme.accentGreen};
      border: 2px solid ${props => props.theme.accentGreen};
    }
  }

  .profile-buttons {
        @media (max-width: 415px) {
      width: 25%;
    }
  }

  input {
    padding: 1rem;
    border-radius: 4px;
    outline: none;
    background-color: ${props => props.theme.lightestGray};
    color: ${props => props.theme.textColor};
    border: none;
    width: 90%;
    height: 2rem;
    transition: all 0.2s ease-in;



    &::placeholder {
      color: ${props => props.theme.darkGray};
    }

    &:focus {
      width: 100%;
      border-radius: 1rem;
      transform: scale(1.25);
    }
  }

  .notification {
    &:hover {
      fill: ${props => props.theme.accentRed}
    }

  }

  div svg {
    width: 2rem;
    height: 2rem;
    fill: ${props => props.theme.lightestGray};
    margin: 0 1.5rem;
    transition: all .2s ease-in;

    &:hover {
      fill: ${props => props.theme.accentGreen};
    }
  }

  @media (max-width: 800px) {
    grid-column: 1;
  }
`;
