import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.green500};
  }

  body {
    background-color: ${(props) => props.theme.gray800};
    color: ${(props) => props.theme.gray100};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${({ theme }) => css`
      font: ${theme.font.fontWeightNormal} 1rem ${theme.font.family}, sans-serif;
    `}
  }

  button {
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  }
`
