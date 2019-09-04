import styled from "styled-components";

export const EmployeeForm = styled.div`
  grid-column: 1 / -1;
  justify-self: center;
  padding: 5rem;
  display: flex;
  flex-direction: column;

  label {
    font-size: 2rem;
    margin: 1rem;
  }

  input {
    background: ${props => props.theme.lightestGray};
    border-radius: 4px;
    border: none;
    color: #fff;
    font-size: 2rem;
    height: 3rem;
    outline: none;
    padding: 2rem;
    transition: width 0.2s ease-in-out;
    width: 90%;

    &:focus {
      width: 100%;
    }
  }

  button {
    background: ${props => props.theme.gray};
    border-radius: 4px;
    border: none;
    color: #fff;
    margin-top: 1rem;
    outline: none;
    padding: 1rem;
    width: 90%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: ${props => props.theme.accentRed};
      border-radius: 1rem;
    }
  }
`;
