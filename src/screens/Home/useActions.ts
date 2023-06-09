import {useGetCategoryQuery} from '@/api/category/categoryApi';
import {useGetFavoriteQuery} from '@/api/favorite/favoriteApi';
import {RestaurantEntity} from '@/api/restaurant/entities/restaurantEntity';
import {useGetRestaurantQuery} from '@/api/restaurant/restaurantApi';
import {RootStackRoutes} from '@/types/stackRoutes';
import {THomeScreenProps} from './HomeScreen';

export const useActionsHome = ({navigation: {navigate}}: THomeScreenProps) => {
  const {data: dataRestaurant} = useGetRestaurantQuery();
  const {data: dataCategory} = useGetCategoryQuery();
  const {data: dataFavorite} = useGetFavoriteQuery();
  const handleSearch = () => navigate(RootStackRoutes.MapAddress);

  const handleGoToDetail = (item: RestaurantEntity) =>
    navigate(RootStackRoutes.Detail, {item});

  return {
    handleSearch,
    handleGoToDetail,
    dataRestaurant,
    dataCategory,
    dataFavorite,
  };
};
