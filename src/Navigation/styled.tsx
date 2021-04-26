import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";
export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  &.${activeClassName} {
    font-weight: bold;
}
`;

export const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.teal};
  margin: 0;
  padding: 10px;
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
padding: 15px;
font-size: 18px;
`;