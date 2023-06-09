import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE, apiBase, EReducersPath} from '@/utils/config';
import {CategoryEntity} from './entities/categoryEntity';

export const categoryApi = createApi({
  reducerPath: EReducersPath.CATEGORY_API,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
    timeout: 30 * 1000,
  }),
  endpoints: build => ({
    getCategory: build.query<CategoryEntity[], void>({
      query: () => apiBase.endpoints.categories,
    }),
  }),
});

export const {useGetCategoryQuery} = categoryApi;
