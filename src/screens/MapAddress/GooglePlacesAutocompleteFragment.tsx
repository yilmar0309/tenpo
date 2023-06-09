import React, {FC} from 'react';
import {
  Modal,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Image, Text} from 'react-native-ui-lib';
import {colorsBase} from '@/styles';
import {GOOGLE_PLACE} from '@/utils/config';

interface Props {
  visible: boolean;
  toggle: () => void;
  getAddress: (item: {description: string}) => void;
}

Geolocation.setRNConfiguration({
  skipPermissionRequests: true,
  authorizationLevel: 'whenInUse',
});

const GooglePlacesAutocompleteFragment: FC<Props> = props => {
  const {visible, toggle, getAddress} = props;

  let refSearch: any = null;

  const renderCleanText = (): JSX.Element => (
    <TouchableOpacity onPress={cleanText} style={styles.arrow}>
      <Image assetName="SEARCH_ICON" style={styles.imageIcon} />
    </TouchableOpacity>
  );

  const cleanText = () => refSearch.setAddressText('');

  const onClick = (item: any) => () => getAddress(item);

  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity onPress={onClick(item)} style={styles.renderitem}>
      <Image assetName="SEARCH_ICON" style={styles.imageIcon} />
      <Text style={styles.text}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      animationType="fade"
      onRequestClose={toggle}
      transparent={true}
      visible={visible}>
      <SafeAreaView style={styles.container}>
        <View style={styles.boxContainer}>
          <GooglePlacesAutocomplete
            placeholder="Buscar dirección"
            placeholderTextColor="black"
            autoFocus={true}
            ref={ref => {
              refSearch = ref;
            }}
            minLength={3}
            keyboardAppearance="light"
            listViewDisplayed="auto"
            fetchDetails={true}
            query={{
              key: GOOGLE_PLACE,
              language: 'es',
              components: 'country:col',
            }}
            styles={{
              container: {
                color: 'red',
              },
              poweredContainer: {
                color: 'red',
              },
              row: {
                color: 'red',
              },
              description: {
                color: 'red',
              },
              loader: {
                color: 'red',
              },
              textInputContainer: {
                backgroundColor: 'white',
                alignSelf: 'center',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderBottomColor: colorsBase.PRIMARY,
                borderTopColor: colorsBase.PRIMARY,
                borderWidth: 1,
                borderColor: colorsBase.PRIMARY,
                marginTop: 10,
                borderRadius: 5,
                width: '95%',
                color: 'red',
              },
              textInput: {
                marginLeft: 0,
                marginRight: 0,
                color: 'black',
                fontSize: 16,
              },
              predefinedPlacesDescription: {
                color: 'red',
              },
            }}
            currentLocation={true}
            nearbyPlacesAPI="GooglePlacesSearch"
            GoogleReverseGeocodingQuery={{}}
            GooglePlacesSearchQuery={{rankby: 'distance', type: 'cities'}}
            GooglePlacesDetailsQuery={{fields: 'formatted_address'}}
            filterReverseGeocodingByTypes={['locality']}
            renderItem={renderItem}
            debounce={500}
            renderRightButton={
              Platform.OS !== 'ios' ? renderCleanText : renderCleanText
            }
            predefinedPlacesAlwaysVisible={true}
            enableHighAccuracyLocation
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default GooglePlacesAutocompleteFragment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsBase.SECONDARY,
  },
  boxContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  arrow: {
    justifyContent: 'center',
  },
  renderitem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
  },
  text: {
    width: '90%',
  },
  imageIcon: {
    height: 30,
    width: 30,
  },
});
