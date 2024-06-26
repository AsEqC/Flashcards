import { usePageFilter } from '@/common/hooks/usePageFilter'
import { useGetDecksQuery } from '@/services/decks/decks.service'

export const useDeckFilter = () => {
  const {
    changeSearchHandler,
    currentPage,
    debounceName,
    itemsPerPage,
    me,
    onChangeCurrentPage,
    onChangeName,
    orderBy,
    search,
    searchBy,
    setItemsPerPage,
    setSearch,
    setSortedBy,
    sortedString,
  } = usePageFilter()
  // const { data: minMaxValues } = useGetMinMaxCardsQuery()

  const onTabValueChange = (value: string) => {
    changeSearchHandler('currentTab', value)
  }

  const getCurrentTab = search.get('currentTab') || 'allCards'

  const onCommitSliderValues = (value: number[]) => {
    changeSearchHandler('minCardsCount', value[0].toString())
    changeSearchHandler('maxCardsCount', value[1].toString())
  }
  const minCards = Number(search.get('minCardsCount') || 0)
  const maxCards = Number(search.get('maxCardsCount') || 15)

  const clearFilter = () => {
    setSearch({})
  }
  const {
    data: deckData,
    isFetching: deckIsFetching,
    isLoading: deckIsLoading,
  } = useGetDecksQuery({
    authorId: getCurrentTab === 'userCards' ? me?.id : undefined,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    maxCardsCount: maxCards,
    minCardsCount: minCards,
    name: debounceName,
    orderBy: sortedString,
  })

  return {
    clearFilter,
    currentPage,
    deckData,
    deckIsFetching,
    deckIsLoading,
    getCurrentTab,
    itemsPerPage,
    maxCards,
    me,
    minCards,
    // minMaxValues,
    onChangeCurrentPage,
    onChangeName,
    onCommitSliderValues,
    onTabValueChange,
    orderBy,
    searchBy,
    setItemsPerPage,
    setSortedBy,
  }
}
