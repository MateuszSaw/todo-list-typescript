import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface StyledContentProps {
  done?: boolean;
  toggleDone?: boolean;
  remove?: boolean
};

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  grid-gap: 10px;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.athensGray};

  ${({ hidden }) => hidden && css`
    display: none;
  `}
`;

export const Content = styled.p<StyledContentProps>`
  overflow-wrap: anywhere;

  ${({ done }) => done && css`
  text-decoration: line-through;
  `}
`;

export const Button = styled.button<StyledContentProps>`
    width: 25px;
    height: 25px;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    padding: 0;
    transition: background 0.5s;

    ${({ toggleDone }) => toggleDone && css`
      background: ${({ theme }) => theme.colors.forestGreen};

      &:hover {
        filter: brightness(110%);
      }
      &:active {
        filter: brightness(120%);
      }
    `}

    ${({ remove }) => remove && css`
    background: ${({ theme }) => theme.colors.crimson};

      &:hover{
        filter: brightness(110%);
      }
      &:active{
        filter: brightness(120%);
      }
    `}
`;


export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.teal}
`;