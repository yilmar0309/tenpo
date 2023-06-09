import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Image, TouchableOpacity, View} from 'react-native-ui-lib';
import {colorsBase} from '@/styles';

const widthWin = Dimensions.get('window').width;

interface HeaderFragmentProps {
  handleSearch: () => void;
}

export const HeaderFragment = ({handleSearch}: HeaderFragmentProps) => {
  return (
    <View>
      <View row spread centerV paddingH-16 paddingT-8>
        <View width={60} height={60}>
          <Image assetName="AVATAR" style={styles.imageAvatarIcon} />
        </View>
        <TouchableOpacity style={styles.btnSearchIcon} onPress={handleSearch}>
          <Image assetName="SEARCH_ICON" style={styles.imageIcon} />
        </TouchableOpacity>
      </View>
      <View row>
        <View height={widthWin / 2} width={widthWin / 2}>
          <Image
            assetName="TENPO_EATS"
            style={styles.imageIcon}
            resizeMode="contain"
          />
        </View>
        <View height={widthWin / 2} width={widthWin / 2}>
          <Image
            assetName="PHONE_HAND"
            style={styles.imageIcon}
            resizeMode="contain"
          />
        </View>
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
  imageAvatarIcon: {
    width: undefined,
    height: undefined,
    flex: 1,
    borderRadius: 999,
    borderColor: colorsBase.PRIMARY,
    borderWidth: 2,
  },
  btnSearchIcon: {
    width: 30,
    height: 30,
  },
});
