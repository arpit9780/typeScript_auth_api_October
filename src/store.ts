import { configureStore  } from '@reduxjs/toolkit'
import postReducer from './Services/Slice'

export const store = configureStore({
  reducer: {
    post : postReducer
}
    ,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export type AppDispatch = typeof store.dispatch;
export type AppSelector = typeof store.dispatch;
// export type RootState = ReturnType <typeOf store.getState>
// export type AppDispatch = TypeOf store.dispatch
