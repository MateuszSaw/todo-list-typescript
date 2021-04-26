import React, { FunctionComponent } from 'react';
import { Wrapper } from './styled';

const Container: React.FC<{}> = ({ children }) =>
<Wrapper>
  {children}
</Wrapper>;

export default Container;