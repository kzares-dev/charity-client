import { configureStore } from '@reduxjs/toolkit'
import { charityApi } from './api/base'
import authSlice from './reducers/auth'

export const store = () => configureStore({
    reducer: {
        auth: authSlice,
        [charityApi.reducerPath]: charityApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(charityApi.middleware),

})

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']