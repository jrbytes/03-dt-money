import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.layout.contentWidth};
    margin: 0 auto;
    padding: 0 ${theme.spacings.medium};

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacings.large};

    margin-top: -5rem;
  `}
`

type SummaryCardProps = {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  ${({ theme, variant }) => css`
    background-color: ${variant === 'green' ? theme.green700 : theme.gray600};
    border-radius: ${theme.borderRadius};
    padding: ${theme.spacings.large};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${theme.gray300};
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: ${theme.sizes.large};
    }
  `}
`
