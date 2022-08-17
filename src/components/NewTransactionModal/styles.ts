import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

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

        &:hover {
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
