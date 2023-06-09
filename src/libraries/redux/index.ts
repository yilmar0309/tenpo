import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {categoryApi} from '@/api/category/categoryApi';
import {favoriteApi} from '@/api/favorite/favoriteApi';
import {restaurantApi} from '@/api/restaurant/restaurantApi';
import address from '@/slices/address';
import loading from '@/slices/loading';

const store = configureStore({
  reducer: {
    loading,
    address,
    [restaurantApi.reducerPath]: restaurantApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      restaurantApi.middleware,
      categoryApi.middleware,
      favoriteApi.middleware,
    ]),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
export default store;
