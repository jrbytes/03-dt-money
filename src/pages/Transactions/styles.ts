import styled, { css } from 'styled-components'

export const TransactionsContainer = styled.main`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.layout.contentWidth};
    margin: ${theme.spacings.xlarge} auto 0;
    padding: 0 ${theme.spacings.medium};
  `}
`

export const TransactionsTable = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 ${theme.spacings.small};
    /* margin-top: ${theme.spacings.medium}; */

    td {
      padding: ${theme.spacings.medium} ${theme.spacings.large};
      background-color: ${theme.gray700};

      &:first-child {
        border-top-left-radius: ${theme.borderRadius};
        border-bottom-left-radius: ${theme.borderRadius};

        border: 0 0 ${theme.borderRadius} ${theme.borderRadius};
      }

      &:last-child {
        border-top-right-radius: ${theme.borderRadius};
        border-bottom-right-radius: ${theme.borderRadius};
      }
    }
  `}
`

type PriceHighlightProps = {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  ${({ theme, variant }) => css`
    color: ${variant === 'income' ? theme.green300 : theme.red300};
  `}
`
