import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/assets'
import { Column } from '@/components/ui/table/table.stories'
import { TableHeader } from '@/components/ui/table/table-header/table-header'

import s from './tableConstuctor/table.module.scss'

import { Table, TableBody, TableDataCell, TableRow } from './table-constructor'

export const TableComponent = () => {
  const columns: Column[] = []

  const options: Option[] = []

  return (
    <Table>
      <TableHeader columns={columns} />
      <TableBody>
        {options.map(t => {
          return (
            <TableRow key={t.title}>
              <TableDataCell>
                <span className={s.tableDataContent}>
                  {t.image && <img alt={'image'} className={s.tableImage} src={t.image} />}
                  {t.title}
                </span>
              </TableDataCell>
              <TableDataCell>{t.cardsCount}</TableDataCell>
              <TableDataCell>{t.updated}</TableDataCell>
              <TableDataCell>{t.createdBy}</TableDataCell>
              <TableDataCell>
                <PlayCircleIcon />
                <EditIcon />
                <DeleteIcon />
              </TableDataCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

type Option = {
  [key: string]: number | string | undefined
  cardsCount: number
  createdBy: string
  image?: string
  title: string
  updated: string
}
