import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Text} from '@react-native-material/core';
import {StackScreenProps} from '@react-navigation/stack';
import {Image, TouchableOpacity, View} from 'react-native-ui-lib';
import {SafeAreaViewComponent} from '@/components/SafeAreaViewComponent/SafeAreaViewComponent';
import {useAppSelector} from '@/hooks/useRedux';
import {selectAddress} from '@/slices/address';
import {colorsBase} from '@/styles';
import {RootStackParamList, RootStackRoutes} from '@/types/stackRoutes';
import {CategoryFragment} from './CategoryFragment';
import {FavoriteFragment} from './FavoriteFragment';
import {HeaderFragment} from './HeaderFragment';
import {RestaurantsFragment} from './RestaurantsFragment';
import {useActionsHome} from './useActions';

export type THomeScreenProps = StackScreenProps<
  RootStackParamList,
  RootStackRoutes.Home
>;

export const HomeScreen: React.FC<THomeScreenProps> = props => {
  const {
    handleSearch,
    handleGoToDetail,
    dataRestaurant,
    dataCategory,
    dataFavorite,
  } = useActionsHome(props);
  const {address} = useAppSelector(selectAddress);

  return (
    <SafeAreaViewComponent backgroundColor="#F2F2F2">
      <ScrollView style={styles.cardBill} showsVerticalScrollIndicator={false}>
        <HeaderFragment handleSearch={handleSearch} />
        <TouchableOpacity
          row
          center
          style={styles.boxAddress}
          onPress={handleSearch}>
          <View width={32} height={40} marginR-8>
            <Image assetName="LOCATION_ICON" style={styles.imageIcon} />
          </View>
          {address ? (
            <View>
              <Text variant="caption" color={colorsBase.PRIMARY}>
                Enviaremos tus pedidos a
              </Text>
              <Text
                variant="body2"
                color={colorsBase.PRIMARY}
                ellipsizeMode="tail"
                numberOfLines={1}>
                {address}
              </Text>
            </View>
          ) : (
            <Text variant="body1" color={colorsBase.PRIMARY}>
              Agregar dirección de entrega
            </Text>
          )}
        </TouchableOpacity>
        <View paddingB-24 paddingH-8>
          <Text style={styles.listTitles} variant="body1">
            RESTAURANTES
          </Text>
          <RestaurantsFragment
            dataRestaurant={dataRestaurant}
            handleGoToDetail={handleGoToDetail}
          />
          <Text
            style={[styles.listTitles, styles.separatorCards]}
            variant="body1">
            CATEGORÍAS
          </Text>
          <CategoryFragment dataCategory={dataCategory} />
          <Text
            style={[styles.listTitles, styles.separatorCards]}
            variant="body1">
            TUS FAVORITOS
          </Text>
          <FavoriteFragment dataFavorite={dataFavorite} />
        </View>
      </ScrollView>
    </SafeAreaViewComponent>
  );
};

const styles = StyleSheet.create({
  boxAddress: {
    paddingHorizontal: 32,
    paddingTop: 24,
    paddingBottom: 32,
    backgroundColor: colorsBase.SECONDARY,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
  imageIcon: {
    width: undefined,
    height: undefined,
    flex: 1,
  },
  cardBill: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginTop: -24,
    paddingVertical: 24,
  },
  listTitles: {
    fontWeight: 'bold',
    color: '#333333',
    marginVertical: 16,
  },
  separatorCards: {
    marginTop: 32,
  },
});
