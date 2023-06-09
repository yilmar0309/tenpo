import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text} from '@react-native-material/core';
import {Image, View} from 'react-native-ui-lib';
import {FavoriteEntity} from '@/api/favorite/entities/favoriteEntity';
import {colorsBase} from '@/styles';

interface FavoriteFragmentProps {
  dataFavorite: FavoriteEntity[] | undefined;
}

export const FavoriteFragment = ({dataFavorite}: FavoriteFragmentProps) => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataFavorite}
        renderItem={({item}) => (
          <RenderFavorite
            rating={item.rating}
            company={item.company}
            description={item.description}
            img={item.img}
          />
        )}
      />
    </View>
  );
};

function RenderFavorite({description, company, rating, img}: FavoriteEntity) {
  return (
    <TouchableOpacity style={styles.btnFavorite}>
      <View width={320} height={110}>
        <ImageBackground
          style={styles.imgBackground}
          source={{
            uri: img,
          }}
          resizeMode="cover"
          borderTopLeftRadius={16}
          borderTopRightRadius={16}>
          <Image
            source={{
              uri: img,
            }}
            style={styles.imgCompany}
          />
        </ImageBackground>
      </View>
      <View style={styles.boxInfo}>
        <View row spread>
          <Text style={styles.textInfo}>{description}</Text>
          <Text style={styles.textInfo}>{rating}</Text>
        </View>
        <View row spread>
          <Text style={styles.textCompany} color={colorsBase.PRIMARY}>
            {company}
          </Text>
          <Text style={styles.textInfo}>10-50 min.</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnFavorite: {
    backgroundColor: '#FFF',
    marginRight: 12,
    width: 320,
    height: 180,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 16,
    marginBottom: 24,
    marginHorizontal: 4,
  },
  imgCompany: {
    height: 50,
    width: 50,
    borderRadius: 8,
  },
  imgBackground: {
    flex: 1,
    padding: 12,
    borderRadius: 16,
  },
  textCompany: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textInfo: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '400',
  },
  boxInfo: {
    padding: 12,
  },
});
