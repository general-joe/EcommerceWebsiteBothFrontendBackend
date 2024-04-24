import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

import { merchApi } from "../api/index";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import userReducer from "../slices/userSlice";
import cartReducer from "../slices/cartSlice";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export const store = configureStore({
  reducer: {
    [merchApi.reducerPath]: merchApi.reducer,
    user: persistReducer(
      {
        key: "user",
        version: 1,
        storage,
      },
      userReducer
    ),
    cart: persistReducer(
      {
        key: "cart",
        version: 1,
        storage,
      },
      cartReducer
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(merchApi.middleware),
});

setupListeners(store.dispatch);

export const reduxPersistor = persistStore(store);
