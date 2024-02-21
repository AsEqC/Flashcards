import { baseApi } from '../base-api'
import {
  CardsResponse,
  CreateDeckArgs,
  Deck,
  DeckResponse,
  DeleteDeckArgs,
  GetDeckArgs,
} from './decks.types'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDecks: builder.mutation<Deck, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => ({ body: args, method: 'POST', url: `v1/decks` }),
      }),
      deleteDecks: builder.mutation<void, DeleteDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => ({ method: 'DELETE', url: `v1/decks/${args.id}` }),
      }),
      getDeckById: builder.query<DeckResponse, { id: string }>({
        query: ({ id }) => `v1/decks/${id}`,
      }),
      getDeckCards: builder.query<CardsResponse, { id: string }>({
        query: ({ id }) => `v1/decks/${id}/cards`,
      }),
      getDecks: builder.query<DeckResponse, GetDeckArgs | void>({
        providesTags: ['Decks'],
        query: args => ({ params: args ?? undefined, url: `v2/decks` }),
      }),
    }
  },
})

export const {
  useCreateDecksMutation,
  useDeleteDecksMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
} = decksService
