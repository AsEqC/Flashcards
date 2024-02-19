import { ComponentPropsWithoutRef } from 'react'

import { ArrowUpIcon } from '@/assets'
import { Column, Sort } from '@/components/ui/table'
import { TableHead, TableHeadCell, TableRow } from '@/components/ui/table/table-constructor'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from '../table-constructor/table.module.scss'

export type TableHeaderProps = Omit<
  ComponentPropsWithoutRef<'thead'> & {
    columns: Column[]
    onSort?: (sort: Sort) => void
    sort?: Sort
  },
  'children'
>
export const TableHeader = (props: TableHeaderProps) => {
  const { columns, onSort, sort, ...restProps } = props
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) {
      return
    }

    if (sort?.key !== key) {
      return onSort({ direction: 'asc', key })
    }

    if (sort.direction === 'desc') {
      return onSort(null)
    }

    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }
  const classname = {
    arrow: clsx(s.arrow, sort?.direction === 'asc' && s.arrowUp),
  }

  return (
    <TableHead {...restProps}>
      <TableRow>
        {columns.map(({ key, sortable = true, title }) => (
          <TableHeadCell className={s.tableHeadCell} key={key} onClick={handleSort(key, sortable)}>
            <Typography className={s.tableHeadTitle} variant={'subtitle2'}>
              <span>
                {title}{' '}
                {sort && sort.key === key && <ArrowUpIcon className={classname.arrow} size={1.3} />}
              </span>
            </Typography>
          </TableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
