import Config from 'react-native-config';

console.log('Config', Config);
export const API_BASE = Config.API_BASE;
export const GOOGLE_PLACE = Config.GOOGLE_PLACE || '';

export enum EReducersPath {
  RESTAURANT_API = 'restaurantApi',
  CATEGORY_API = 'categoryApi',
  FAVORITE_API = 'favoriteApi',
}

export const apiBase = {
  baseUrl: API_BASE,
  endpoints: {
    restaurants: '/restaurants/get-all',
    categories: '/restaurants/get-all-categories',
    favorites: '/restaurants/get-all-favorites',
  },
};
