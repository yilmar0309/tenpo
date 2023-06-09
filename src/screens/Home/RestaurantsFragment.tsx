import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Text} from '@react-native-material/core';
import {Card, TouchableOpacity, View} from 'react-native-ui-lib';
import {RestaurantEntity} from '@/api/restaurant/entities/restaurantEntity';

interface RestaurantsFragmentProps {
  dataRestaurant: RestaurantEntity[] | undefined;
  handleGoToDetail: (item: RestaurantEntity) => void;
}

export const RestaurantsFragment = ({
  dataRestaurant,
  handleGoToDetail,
}: RestaurantsFragmentProps) => {
  const renderRestaurants = (item: RestaurantEntity) => (
    <TouchableOpacity
      style={styles.btnRestaurant}
      onPress={() => handleGoToDetail(item)}>
      <View height={110} width={110}>
        <Card.Image
          source={{
            uri: item.img,
          }}
          width="100%"
          height="100%"
          borderRadius={16}
        />
      </View>
      <Text numberOfLines={1} style={styles.title}>
        {item.name}
      </Text>
      <Text numberOfLines={1} style={styles.textRate}>
        {item.rating} 10-50min.
      </Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataRestaurant}
        renderItem={({item}) => renderRestaurants(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnRestaurant: {
    marginRight: 12,
    width: 110,
    height: 160,
    marginBottom: 8,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333333',
  },
  textRate: {
    fontSize: 13,
    fontWeight: '400',
    color: '#333333',
  },
});
