import { MagnifyingGlass } from 'phosphor-react'
import * as S from './styles'

export function SearchForm() {
  return (
    <S.SearchFormContainer>
      <input type="text" placeholder="Busque por transações" />

      <button>
        <MagnifyingGlass /> Buscar
      </button>
    </S.SearchFormContainer>
  )
}
