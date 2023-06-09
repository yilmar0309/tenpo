import React from 'react';
import {Platform, SafeAreaView, StyleSheet} from 'react-native';
import {Button, Text, TextInput} from '@react-native-material/core';
import {StackScreenProps} from '@react-navigation/stack';
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import {Image, TouchableOpacity, View} from 'react-native-ui-lib';
import {images} from '@/assets/images';
import {colorsBase} from '@/styles';
import {RootStackParamList, RootStackRoutes} from '@/types/stackRoutes';
import GooglePlacesAutocompleteFragment from './GooglePlacesAutocompleteFragment';
import {useActionsMapAddress} from './useActions';

export type TMapAddressScreenProps = StackScreenProps<
  RootStackParamList,
  RootStackRoutes.MapAddress
>;

const MapAddressScreen: React.FC<TMapAddressScreenProps> = props => {
  const {
    region,
    addressInfo,
    modalGooglePlaces,
    toggleModalGooglePlaces,
    handleGetAddress,
    handleOnChangeText,
    handleSaveAddress,
  } = useActionsMapAddress(props);

  return (
    <SafeAreaView style={styles.container}>
      {modalGooglePlaces && (
        <GooglePlacesAutocompleteFragment
          visible={modalGooglePlaces}
          toggle={toggleModalGooglePlaces}
          getAddress={handleGetAddress}
        />
      )}
      <View style={styles.viewMap}>
        <MapView
          provider={
            Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
          }
          style={styles.container}
          region={region}
          showsUserLocation={false}
          followsUserLocation={true}
          showsMyLocationButton={false}
          showsPointsOfInterest={true}
          showsCompass={true}
          maxZoomLevel={20}>
          <Marker
            coordinate={region}
            title="prueba"
            description="description prueba"
            pinColor={colorsBase.PRIMARY}
            image={images.MARKET}
          />
        </MapView>
        <View
          width="100%"
          backgroundColor={colorsBase.SECONDARY}
          style={styles.centerItems}
          paddingV-48
          center>
          <View row centerV marginB-16>
            <Image assetName="LOCATION_ICON" style={styles.imageIcon} />
            <Text variant="body1" color={colorsBase.PRIMARY}>
              Agregar dirección de entrega
            </Text>
          </View>
          <TouchableOpacity
            style={styles.btnMap}
            onPress={toggleModalGooglePlaces}
            center>
            <Text
              color={colorsBase.PRIMARY}
              ellipsizeMode="tail"
              numberOfLines={1}
              style={styles.textAddress}>
              {addressInfo.address || 'Buscar dirección'}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          paddingH-8
          paddingV-16
          paddingT-32
          width="100%"
          backgroundColor="white"
          style={styles.containerForm}>
          <Text variant="body1" color="black" style={styles.textAddAddress}>
            Agregar dirección de entrega
          </Text>
          <Text variant="caption" color="#ADADAD">
            Depto, Oficina, Piso, Block
          </Text>
          <TextInput
            multiline
            numberOfLines={4}
            maxLength={500}
            variant="outlined"
            label=""
            inputContainerStyle={styles.textInput}
            color={colorsBase.PRIMARY}
            value={addressInfo.description}
            onChangeText={handleOnChangeText}
          />
          <Button
            title="AGREGAR DIRECCIÓN"
            style={styles.button}
            color={colorsBase.PRIMARY}
            tintColor="white"
            contentContainerStyle={styles.contentContainerStyle}
            onPress={handleSaveAddress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MapAddressScreen;

const styles = StyleSheet.create({
  centerItems: {
    alignItems: 'center',
  },
  btnMap: {
    backgroundColor: '#FFFFFF',
    height: 60,
    width: '100%',
    borderRadius: 48,
    position: 'absolute',
    bottom: -24,
  },
  container: {
    flex: 1,
    backgroundColor: colorsBase.SECONDARY,
    ...StyleSheet.absoluteFillObject,
  },
  viewMap: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageIcon: {
    width: 28,
    height: 30,
  },
  textAddAddress: {
    fontWeight: 'bold',
  },
  textInput: {
    marginTop: 16,
    height: 100,
    paddingVertical: 8,
  },
  button: {
    marginTop: 32,
  },
  contentContainerStyle: {
    height: 48,
  },
  textAddress: {
    marginHorizontal: 16,
  },
  containerForm: {position: 'absolute', bottom: 0},
});
