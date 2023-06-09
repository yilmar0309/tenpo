import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '@react-native-material/core';
import {StackScreenProps} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Card, View} from 'react-native-ui-lib';
import {useAppSelector} from '@/hooks/useRedux';
import {HeaderFragment} from '@/screens/Detail/HeaderFragment';
import {selectAddress} from '@/slices/address';
import {colorsBase} from '@/styles';
import {RootStackParamList, RootStackRoutes} from '@/types/stackRoutes';

export type TDetailScreenProps = StackScreenProps<
  RootStackParamList,
  RootStackRoutes.Detail
>;

export const DetailScreen: React.FC<TDetailScreenProps> = props => {
  const {
    route: {
      params: {item},
    },
  } = props;
  const {address} = useAppSelector(selectAddress);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderFragment address={address} props={props} />
      <View
        flex-1
        centerH
        paddingV-32
        backgroundColor="white"
        style={styles.containerInfo}>
        <View height={100} width={100}>
          <Card.Image
            source={{
              uri: item.img,
            }}
            width="100%"
            height="100%"
            borderRadius={16}
          />
        </View>
        <Text variant="body1" style={styles.textTitle}>
          {item.name}
        </Text>
        <Text variant="body1" style={styles.textDetail}>
          Detalle del restaurante
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsBase.SECONDARY,
  },
  containerInfo: {
    borderRadius: 32,
  },
  textTitle: {
    fontWeight: 'bold',
    marginTop: 16,
  },
  textDetail: {
    marginTop: 100,
  },
});
