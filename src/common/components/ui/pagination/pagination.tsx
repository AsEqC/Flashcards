import { LeftArrowIcon, MoreIcon, RightArrowIcon } from '@/assets'
import { Select } from '@/common/components/ui/select'
import { SelectTextItem } from '@/common/components/ui/select/select-item'
import { Typography } from '@/common/components/ui/typography'
import { DOTS, usePagination } from '@/common/hooks/usePagination'
import clsx from 'clsx'

import s from './pagination.module.scss'

export type PaginationProps = {
  changeCurrentPage: (value: number) => void
  changeItemsPerPage: (value: number) => void
  className?: string
  currentPage: number
  pageSize: number
  siblingCount?: number
  totalCount: number
}

export const Pagination = (props: PaginationProps) => {
  const {
    changeCurrentPage,
    changeItemsPerPage,
    className,
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  } = props
  const onChangeValue = (value: string) => {
    changeItemsPerPage(+value)
  }
  const paginationRange = usePagination({ currentPage, pageSize, siblingCount, totalCount })

  if (currentPage === 0 || (paginationRange && paginationRange.length < 1)) {
    return null
  }
  const onNext = () => {
    changeCurrentPage(currentPage + 1)
  }

  const onPrevious = () => {
    changeCurrentPage(currentPage - 1)
  }

  const lastPage = paginationRange?.[paginationRange.length - 1]
  const firstPage = 1

  if (lastPage && currentPage > +lastPage) {
    changeCurrentPage(+lastPage)
  }

  const classname = {
    arrowBackward: clsx(s.arrow, currentPage === firstPage && s.disabled),
    arrowForward: clsx(s.arrow, currentPage === lastPage && s.disabled),
    paginationContainer: clsx(s.pagination_container, className),
  }

  return (
    <div className={classname.paginationContainer}>
      <LeftArrowIcon className={classname.arrowBackward} onClick={onPrevious} size={1.3} />

      {paginationRange?.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <MoreIcon className={s.dots} key={index} size={1.9} />
        }

        return (
          <li
            className={clsx(s.pagination_item, pageNumber === currentPage && s.selected)}
            key={index}
            onClick={() => changeCurrentPage(+pageNumber)}
          >
            {pageNumber}
          </li>
        )
      })}
      <RightArrowIcon className={classname.arrowForward} onClick={onNext} size={1.3} />
      <Typography className={s.selectWrapper} variant={'body2'}>
        Показать
        <Select
          defaultValue={pageSize.toString()}
          onValueChange={onChangeValue}
          variant={'pagination'}
        >
          <SelectTextItem value={'4'}>4</SelectTextItem>
          <SelectTextItem value={'6'}>6</SelectTextItem>
          <SelectTextItem value={'8'}>8</SelectTextItem>
          <SelectTextItem value={'10'}>10</SelectTextItem>
        </Select>
        на странице
      </Typography>
    </div>
  )
}
