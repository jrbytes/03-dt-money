import * as S from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logo} alt="logo do site" />
        <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
