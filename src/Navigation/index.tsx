import { Item, List, StyledNavLink } from "./styled";
import { toAuthor, toTasks } from "../routes";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const Navigation: React.FC<{}> = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <nav>
      <List>
        <Item>
          <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
        </Item>
      </List>
    </nav>
  );
};

export default Navigation;