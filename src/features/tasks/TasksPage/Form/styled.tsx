import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  background:${({ theme }) => theme.colors.teal};
  color:${({ theme }) => theme.colors.athensGray};
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: 0.5s;

  &:hover{
    filter: brightness(110%);
    transform: scale(1.1);
  }

  &:active{
    filter: brightness(120%);
  }

`;