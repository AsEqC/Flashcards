import { useMemo, useState } from 'react'

import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/assets'
import { Input } from '@/common/components/ui/input'
import { Column, Sort } from '@/common/components/ui/table'
import {
  Table,
  TableBody,
  TableDataCell,
  TableRow,
} from '@/common/components/ui/table/table-constructor'
import { TableHeader } from '@/common/components/ui/table/table-header/table-header'
import { useDebounce } from '@/common/hooks/useDebounce'
import { useDeleteDecksMutation, useGetDecksQuery } from '@/services/decks/decks.service'

import s from './decks.module.scss'

const columns: Column[] = [
  { key: 'name', sortable: true, title: 'Name' },
  { key: 'cardsCount', sortable: true, title: 'Cards' },
  { key: 'updated', sortable: true, title: 'Last Updated' },
  { key: 'createdBy', sortable: true, title: 'Created by' },
  { key: '', sortable: false, title: '' },
]

export const Decks = () => {
  const [search, setSearch] = useState<string>('')
  const [orderBy, setOrderBy] = useState<Sort>(null)

  const orderByString = useMemo(() => {
    if (!orderBy) {
      return null
    }

    return `${orderBy.key}-${orderBy.direction}`
  }, [orderBy])

  const debouncedSearch = useDebounce<string>(search)
  const { data, error, isLoading } = useGetDecksQuery({
    name: search,
    orderBy: orderByString,
  })

  const [deleteDeck, { isLoading: isDeckBeingDeleted }] = useDeleteDecksMutation()

  if (isLoading) {
    return <h1>Loading</h1>
  }
  if (error) {
    return <h1>Error:{JSON.stringify(error)}</h1>
  }

  return (
    <div className={s.tableWrapper}>
      <Input
        className={s.input}
        onValueChange={setSearch}
        placeholder={'Input search'}
        type={'search'}
        value={debouncedSearch}
      />
      <Table>
        <TableHeader columns={columns} onSort={setOrderBy} sort={orderBy} />
        <TableBody>
          {data?.items.map(deck => (
            <TableRow key={deck.id}>
              <TableDataCell>{deck.name}</TableDataCell>
              <TableDataCell>{deck.cardsCount}</TableDataCell>
              <TableDataCell>{new Date(deck.updated).toLocaleDateString('ru-RU')}</TableDataCell>
              <TableDataCell>{deck.author.name}</TableDataCell>
              <TableDataCell className={s.icons}>
                <PlayCircleIcon size={1.5} />
                <EditIcon size={1.5} />
                <DeleteIcon
                  disabled={isDeckBeingDeleted}
                  onClick={() => deleteDeck({ id: deck.id })}
                  size={1.5}
                />
              </TableDataCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
