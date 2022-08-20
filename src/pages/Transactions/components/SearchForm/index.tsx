import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import * as S from './styles'

type SearchFormProps = {
  query: string
}

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const { register, handleSubmit, formState } = useForm<SearchFormProps>()
  const { isSubmitting } = formState

  async function handleSearchTransactions(data: SearchFormProps) {
    await fetchTransactions(data.query)
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
