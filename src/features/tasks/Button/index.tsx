import styled from "styled-components";

export default styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.teal};
  background: none;
  cursor: pointer;
  transition: filter 0.5s;

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
`