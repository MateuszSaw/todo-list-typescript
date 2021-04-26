import styled from "styled-components";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.white};
  margin-bottom: 10px;
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.athensGray};
`;

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.athensGray};
  padding: 20px;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
    grid-template-columns: 1fr;
  }

`;

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
`;
export const Body = styled.div`
  padding: 20px;
`;