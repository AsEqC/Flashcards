import type { Meta, StoryObj } from '@storybook/react'

import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/assets'
import userAvatar from '@/assets/images/defaultAvatar.png'
import { Column } from '@/common/components/ui/table/table'
import {
  Table,
  TableBody,
  TableDataCell,
  TableRow,
} from '@/common/components/ui/table/table-constructor'
import { TableHeader } from '@/common/components/ui/table/table-header/table-header'

import s from './table-constructor/table.module.scss'

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const TableStory: Story = {
  args: {},
  render: args => {
    const columns: Column[] = [
      {
        key: 'title',
        title: 'Name',
      },
      {
        key: 'cardsCount',
        title: 'Cards',
      },
      {
        key: 'updated',
        title: 'Last Updated',
      },
      {
        key: 'createdBy',
        title: 'Created by',
      },
      {
        key: 'icons',
        title: '',
      },
    ]

    const options = [
      {
        cardsCount: 10,
        createdBy: 'John Doe',
        title: 'A',
        updated: '2023-07-07',
      },
      {
        cardsCount: 5,
        createdBy: 'Jane Smith',
        title: 'B',
        updated: '2023-07-06',
      },
      {
        cardsCount: 8,
        createdBy: 'Alice Johnson',
        title: 'C',
        updated: '2023-07-05',
      },
      {
        cardsCount: 3,
        createdBy: 'Bob Anderson',
        title: 'D',
        updated: '2023-07-07',
      },
      {
        cardsCount: 12,
        createdBy: 'Emma Davis',
        title: 'E',
        updated: '2023-07-04',
      },
      {
        cardsCount: 1,
        createdBy: '01',
        image: userAvatar,
        title: 'Books',
        updated: '2023-01-31T12:45:00.000Z',
      },
    ]

    return (
      <Table {...args}>
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
                  <PlayCircleIcon size={1.5} />
                  <EditIcon size={1.5} />
                  <DeleteIcon size={1.5} />
                </TableDataCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  },
}
