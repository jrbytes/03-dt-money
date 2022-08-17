import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.gray900};
    padding: 2.5rem 0 7.5rem 0;
  `}
`

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.layout.contentWidth};
    margin: 0 auto;
    padding: 0 ${theme.spacings.medium};

    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

export const NewTransactionButton = styled.button`
  ${({ theme }) => css`
    height: 50px;
    border: 0;
    background-color: ${theme.green500};
    color: ${theme.white};
    font-weight: bold;
    padding: 0 ${theme.spacings.medium};
    border-radius: ${theme.borderRadius};
    cursor: pointer;

    &:hover {
      background-color: ${theme.green700};
    }
  `}
`
