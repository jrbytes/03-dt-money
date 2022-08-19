import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as S from './styles'

type SearchFormProps = {
  query: string
}

export function SearchForm() {
  const { register, handleSubmit, formState } = useForm<SearchFormProps>()
  const { isSubmitting } = formState

  async function handleSearchTransactions(data: SearchFormProps) {
    console.log(data)
  }

  return (
    <S.SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass /> Buscar
      </button>
    </S.SearchFormContainer>
  )
}
