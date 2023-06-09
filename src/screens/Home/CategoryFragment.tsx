import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text} from '@react-native-material/core';
import {View} from 'react-native-ui-lib';
import {CategoryEntity} from '@/api/category/entities/categoryEntity';

interface CategoryFragmentProps {
  dataCategory: CategoryEntity[] | undefined;
}

export const CategoryFragment = ({dataCategory}: CategoryFragmentProps) => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataCategory}
        renderItem={({item}) => (
          <RenderCategories name={item.name} img={item.img} />
        )}
      />
    </View>
  );
};

function RenderCategories({name, img}: CategoryEntity) {
  return (
    <TouchableOpacity style={styles.btnCategory}>
      <ImageBackground
        style={styles.imgBackground}
        imageStyle={styles.opacityBackground}
        source={{
          uri: img,
        }}
        resizeMode="cover"
        borderRadius={16}>
        <Text style={styles.title}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnCategory: {
    marginRight: 12,
    width: 220,
    height: 110,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 8,
    marginHorizontal: 4,
  },
  opacityBackground: {
    opacity: 0.8,
  },
  imgBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.8)',
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
