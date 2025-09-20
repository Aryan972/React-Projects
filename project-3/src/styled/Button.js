import styled from "styled-components";

export  const Button = styled.button`
    min-width:220px;
    background-color: black;
    color:white;
    justify-content: end;
    border-radius: 5px;
    padding: 10px 18px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.4s background ease-in;

    &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
    }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
    &:hover{
        background-color: black;
        color: white;
        border: 1px solid transparent;
    }

`;

