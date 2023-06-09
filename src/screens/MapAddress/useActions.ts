import {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  Linking,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import {useAppDispatch, useAppSelector} from '@/hooks/useRedux';
import {
  selectAddress,
  setAddress,
  setAddressDescription,
} from '@/slices/address';
import {GOOGLE_PLACE} from '@/utils/config';
import {TMapAddressScreenProps} from './MapAddressScreen';
const {width, height} = Dimensions.get('window');

Geocoder.init(GOOGLE_PLACE);

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0122;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const useActionsMapAddress = ({
  navigation: {goBack},
}: TMapAddressScreenProps) => {
  const dispatch = useAppDispatch();
  const address = useAppSelector(selectAddress);

  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const [addressInfo, setAddressInfo] = useState({
    address: '',
    description: '',
  });
  const [modalGooglePlaces, setModalGooglePlaces] = useState(false);

  useEffect(() => {
    setAddressInfo({...address});
  }, [address]);

  useEffect(() => {
    Geocoder.from(region.latitude || 0, region.longitude || 0)
      .then(json => {
        setAddressInfo({
          ...addressInfo,
          address: json.results[0].formatted_address,
        });
      })
      .catch(error => console.warn(error));
  }, [region]);

  const handleSaveAddress = () => {
    dispatch(setAddress(addressInfo.address));
    dispatch(setAddressDescription(addressInfo.description));
    goBack();
  };

  const toggleModalGooglePlaces = () => {
    setModalGooglePlaces(!modalGooglePlaces);
  };

  const handleOnChangeText = (text: string) =>
    setAddressInfo({...addressInfo, description: text});

  const handleGetAddress = async (item: {description: string}) => {
    console.log('datos que llegan -->', JSON.stringify(item));
    // dispatch(setAddress(item?.description));
    setAddressInfo({
      ...addressInfo,
      address: item?.description,
    });
    Geocoder.from(item?.description)
      .then(json => {
        const location = json.results[0].geometry.location;
        setRegion({
          ...region,
          latitude: location.lat,
          longitude: location.lng,
        });
        toggleModalGooglePlaces();
      })
      .catch(error => console.warn(error));
  };

  useEffect(() => {
    async function fetch() {
      if (Platform.OS === 'android') {
        const hasPermission = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (hasPermission) {
          getLocation();
          return true;
        }
      } else {
        getLocation();
      }
    }
    fetch();
  }, []);

  async function getLocation() {
    const permision = await hasLocationPermission();
    if (!permision) {
      return;
    }

    Geolocation.getCurrentPosition(
      (position: any) => {
        setRegion({
          ...region,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error: any) => {
        console.log('error location', error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
        showLocationDialog: true,
      },
    );
  }

  const hasLocationPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
      Alert.alert(
        `Turn on Location Services to allow "tenpo" to determine your location.`,
        '',
        [
          {text: 'Go to Settings', onPress: openSetting},
          {text: "Don't Use Location", onPress: () => {}},
        ],
      );
    }

    return false;
  };

  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasLocationPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  };
  return {
    region,
    addressInfo,
    modalGooglePlaces,
    toggleModalGooglePlaces,
    handleGetAddress,
    handleOnChangeText,
    handleSaveAddress,
  };
};
