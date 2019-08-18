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
    font-size: 2rem;
    color: #fff;
    padding: 2rem;
    border-radius: 4px;
    outline: none;
    border: none;
    width: 90%;
    height: 3rem;
    background: ${props => props.theme.lightestGray};
    transition: width 0.2s ease-in-out;

    &:focus {
      width: 100%;
    }
  }
`;
