import { configureStore } from '@reduxjs/toolkit'
import cardsDataReducer from "../store/cardsData/cardsDataSlice"
import searchQueryReducer from "../store/searchQuery/searchQuery"

export const store = configureStore({
  reducer: {
    cards: cardsDataReducer,
    searchQuery: searchQueryReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch