import { Pagination } from '@/services/common.types'

export interface DeckResponse {
  items: Deck[]
  pagination: Pagination
}
export interface Deck {
  author: User
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export interface User {
  id: string
  name: string
}

export interface GetDeckArgs {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: null | string
}
export interface CreateDeckArgs {
  cover?: File | null
  isPrivate?: boolean
  name: string
}
export interface DeleteDeckArgs {
  id: string
}
