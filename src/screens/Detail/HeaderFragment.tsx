import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '@react-native-material/core';
import {Image, TouchableOpacity, View} from 'react-native-ui-lib';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colorsBase} from '@/styles';
import {RootStackRoutes} from '@/types/stackRoutes';
import {TDetailScreenProps} from './DetailScreen';

interface THeaderFragmentProps {
  address: string;
  props: TDetailScreenProps;
}

export const HeaderFragment = ({
  address,
  props: {
    navigation: {navigate, goBack},
  },
}: THeaderFragmentProps) => {
  return (
    <View backgroundColor={colorsBase.SECONDARY} height={60} paddingH-8>
      <View row spread centerV flex-1>
        <TouchableOpacity row centerV onPress={goBack} flex-1>
          <MaterialCommunityIcons
            name="arrow-left"
            color={colorsBase.PRIMARY}
            size={32}
          />
          <View marginL-8 flex-1>
            <Text
              variant="caption"
              style={styles.textTitle}
              color={colorsBase.PRIMARY}>
              Tu ubicación cercana
            </Text>
            <Text
              variant="body1"
              color={colorsBase.PRIMARY}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {address}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnSearchIcon}
          onPress={() => navigate(RootStackRoutes.MapAddress)}>
          <Image assetName="SEARCH_ICON" style={styles.imageIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageIcon: {
    width: undefined,
    height: undefined,
    flex: 1,
  },
  btnSearchIcon: {
    width: 30,
    height: 30,
  },
  textTitle: {
    fontWeight: 'bold',
  },
});
