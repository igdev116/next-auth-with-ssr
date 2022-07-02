import styled from 'styled-components';

export const H1 = styled.h1`
  text-align: center;

  > span {
    text-transform: capitalize;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  margin-top: 24px;
`;

export const Button = styled.button`
  padding: 6px 14px;

  cursor: pointer;
`;

export const Row = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
