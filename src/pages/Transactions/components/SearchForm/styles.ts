import styled, { css } from 'styled-components'

export const SearchFormContainer = styled.form`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.medium};

    input {
      flex: 1;
      border: 1px solid ${theme.gray600};
      border-radius: ${theme.borderRadius};
      background-color: ${theme.gray900};
      color: ${theme.gray300};
      padding: ${theme.spacings.medium};

      &::placeholder {
        color: ${theme.gray500};
      }
    }

    button {
      display: flex;
      align-items: center;
      gap: ${theme.spacings.small};

      border: 0;
      padding: ${theme.spacings.medium};
      background: transparent;
      border: 1px solid ${theme.green300};
      color: ${theme.green300};
      font-weight: ${theme.font.fontWeightBold};
      border-radius: ${theme.borderRadius};

      &:hover {
        background: ${theme.green500};
        border-color: ${theme.green500};
        color: ${theme.white};
      }
    }
  `}
`
