import React, { ReactFragment } from 'react';
import { Wrapper, Header, Title, Body } from './styled';

interface SectionProps {
  title: string,
  body: ReactFragment,
  extraHeaderContent?: any,
}
const Section: React.FC<SectionProps> = ({ title, body, extraHeaderContent }: SectionProps) => (
  <Wrapper>
    <Header>
      <Title>
        {title}
      </Title>
      {extraHeaderContent}
    </Header>
    <Body>
      {body}
    </Body>
  </Wrapper>
)

export default Section;