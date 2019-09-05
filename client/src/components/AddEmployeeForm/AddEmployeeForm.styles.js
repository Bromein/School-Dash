import styled from "styled-components";

export const EmployeeForm = styled.div`
  grid-column: 1 / -1;
  justify-self: center;
  padding: 5rem;
  display: ${props => (props.formVisible ? "flex" : "none")};
  opacity: ${props => (props.formVisible ? "1" : "0")};
  width: ${props => props.formVisible || 0};
  height: ${props => props.formVisible || 0};
  flex-direction: column;
  transition: all 1s ease-in;

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
    transition: height 0.2s ease-in-out;
    width: 100%;

    &:focus {
      height: 5rem;
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
    align-self: center;

    &:hover {
      background: ${props => props.theme.accentRed};
      border-radius: 1rem;
    }
  }
`;
