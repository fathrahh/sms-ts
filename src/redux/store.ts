import { configureStore } from "@reduxjs/toolkit";
import { persistReducer,persistStore } from "redux-persist";
import { rootPersistConfig  } from "./rootReducer";

export const store = configureStore({
    reducer: persistReducer(rootPersistConfig),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck : false
    })
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

const { dispatch } = store

/*
 * TODO Learning RTK
 * Redux Persist
 * Redux Slice
*/