import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE, apiBase, EReducersPath} from '@/utils/config';
import {RestaurantEntity} from './entities/restaurantEntity';

export const restaurantApi = createApi({
  reducerPath: EReducersPath.RESTAURANT_API,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
    timeout: 30 * 1000,
  }),
  endpoints: build => ({
    getRestaurant: build.query<RestaurantEntity[], void>({
      query: () => apiBase.endpoints.restaurants,
    }),
  }),
});

export const {useGetRestaurantQuery} = restaurantApi;
