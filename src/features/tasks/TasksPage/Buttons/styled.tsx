import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.teal};
  background: none;
  cursor: pointer;
  transition: color 1s;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
    flex-basis: 100%;
        margin: 10px;
  }

  &:hover{
    filter: brightness(110%);
  }
  &:active{
    filter: brightness(120%);
  }

  &:disabled{
    color: ${({ theme }) => theme.colors.athensGray};
  }

`;