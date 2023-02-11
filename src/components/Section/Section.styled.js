import styled from '@emotion/styled';

export const Title = styled.h2`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.dark};;
  border-radius: 10px 10px 0 0;
`

export const Content = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.light};;
  border-radius: 0 0 10px 10px;
  border: 3px solid #cca8e9;
`
