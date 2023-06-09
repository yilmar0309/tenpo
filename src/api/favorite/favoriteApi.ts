import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE, apiBase, EReducersPath} from '@/utils/config';
import {FavoriteEntity} from './entities/favoriteEntity';

export const favoriteApi = createApi({
  reducerPath: EReducersPath.FAVORITE_API,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
    timeout: 30 * 1000,
  }),
  endpoints: build => ({
    getFavorite: build.query<FavoriteEntity[], void>({
      query: () => apiBase.endpoints.favorites,
    }),
  }),
});

export const {useGetFavoriteQuery} = favoriteApi;
