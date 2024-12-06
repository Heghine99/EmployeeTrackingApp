import { Platform } from "react-native";
import Geolocation, {
  GeoCoordinates,
  GeoPosition,
} from "react-native-geolocation-service";
import { PERMISSIONS, request, RESULTS } from "react-native-permissions";

const permissionKey = Platform.OS
  ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
  : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

export const getCurrentLocation = (): Promise<GeoCoordinates> =>
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position: GeoPosition) => {
        const cords: GeoCoordinates = {
          latitude: position?.coords?.latitude,
          longitude: position?.coords?.longitude,
          heading: position?.coords?.heading,
          accuracy: position?.coords?.accuracy,
          altitude: position?.coords?.altitude,
          speed: position?.coords?.speed,
        };
        resolve(cords);
      },
      (error) => {
        reject(error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  });

export const requestLocationPermission = async (): Promise<void> => {
  try {
    if (Platform.OS) {
      await Geolocation.requestAuthorization("whenInUse");
      Geolocation.getCurrentPosition(() => {});
    } else {
      const granted = await request(permissionKey);
      if (granted === RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(() => {});
      }
    }
  } catch (e) {
    // if (IS_ANDROID) {
    //   alert(e);
    // }
  }
};
