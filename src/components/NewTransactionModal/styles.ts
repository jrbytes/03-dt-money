import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  ${({ theme }) => css`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background-color: ${theme.overlayBackground};
  `}
`

export const Content = styled(Dialog.Content)`
  ${({ theme }) => css`
    min-width: 32rem;
    border-radius: ${theme.borderRadius};
    padding: ${theme.spacings.large} ${theme.spacings.xlarge};
    background-color: ${theme.gray800};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
      margin-top: ${theme.spacings.large};

      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.medium};

      input {
        border-radius: ${theme.borderRadius};
        border: 0;
        background-color: ${theme.gray900};
        color: ${theme.gray300};
        padding: ${theme.spacings.medium};

        &::placeholder {
          color: ${theme.gray500};
        }
      }

      button[type='submit'] {
        height: 58px;
        border: 0;
        background-color: ${theme.green500};
        color: ${theme.white};
        font-weight: ${theme.font.fontWeightBold};
        padding: 0 ${theme.spacings.medium};
        border-radius: ${theme.borderRadius};
        margin-top: ${theme.spacings.medium};
        cursor: pointer;

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        &:not(:disabled):hover {
          background-color: ${theme.green700};
        }
      }
    }
  `}
`

export const CloseButton = styled(Dialog.Close)`
  ${({ theme }) => css`
    position: absolute;
    background: transparent;
    border: 0;
    top: ${theme.spacings.large};
    right: ${theme.spacings.xlarge};
    line-height: 0;
    cursor: pointer;
    color: ${theme.gray500};
  `}
`

export const TransactionType = styled(RadioGroup.Root)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.small};
  `}
`

type TransactionTypeButtonProps = {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  ${({ theme, variant }) => css`
    background-color: ${theme.gray700};
    padding: ${theme.spacings.medium};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.small};
    border-radius: ${theme.borderRadius};
    cursor: pointer;
    border: 0;
    color: ${theme.gray300};

    svg {
      color: ${variant === 'income' ? theme.green300 : theme.red300};
    }

    &[data-state='unchecked'] {
      background-color: ${theme.gray600};
    }

    &[data-state='checked'] {
      color: ${theme.white};
      background-color: ${variant === 'income' ? theme.green500 : theme.red500};

      svg {
        color: ${theme.white};
      }
    }
  `}
`
