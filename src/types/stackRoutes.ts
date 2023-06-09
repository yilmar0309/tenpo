import {RestaurantEntity} from '@/api/restaurant/entities/restaurantEntity';

export enum RootStackRoutes {
  Home = 'Home',
  MapAddress = 'MapAddress',
  Detail = 'Detail',
}

export type RootStackParamList = {
  [RootStackRoutes.Home]: undefined;
  [RootStackRoutes.MapAddress]: undefined;
  [RootStackRoutes.Detail]: {item: RestaurantEntity};
};
