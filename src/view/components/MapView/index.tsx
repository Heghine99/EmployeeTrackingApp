import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { theme } from "../../styles";
import { AppText } from "@/src/uiKit/AppText";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./styles";
import EmployeeMarker from "@/src/view/assets/icons/avatar.svg";
import FinishFlagMarker from "@/src/view/assets/icons/finishFlag.svg";
import GeolocationMarker from "@/src/view/assets/icons/geolocation.svg";
import { Employee, Route } from "@/src/data/types";
import MapViewDirections from "react-native-maps-directions";
import { MAP_API_KEY } from "@/src/constants/env";
import { formatDistanceToMeters } from "@/src/utils/formatDistanceToMeter";
import { formatDurationToHours } from "@/src/utils/formatDurationToHours";
import { calculateAverageSpeed } from "@/src/utils/calculateAverageSpeed";

interface MapViewProps {
  employees?: Employee[];
  route?: Route[];
  setditailsRoute?: any;
}

type RouteData = {
  distance: string;
  duration: string;
  averageSpeed: string;
};

export const MapViewComponent: React.FC<MapViewProps> = ({
  employees,
  route,
  setditailsRoute,
}) => {
  const [routeData, setRouteData] = useState<RouteData | null>(null);

  useEffect(() => {
    if (routeData) {
      setditailsRoute(routeData);
    }
  }, [routeData]);

  const handleOnReady = ({ distance, duration }: any) => {
    setRouteData({
      distance: formatDistanceToMeters(Number(distance)),
      duration: formatDurationToHours(Number(duration)),
      averageSpeed: calculateAverageSpeed(distance, duration),
    });
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 55.7558,
        longitude: 37.6173,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {employees?.length &&
        employees.map((item, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: item.location.lat,
              longitude: item.location.lng,
            }}
            icon={require("@/src/view/assets/icons/delete.svg")}
          >
            <View style={{ alignItems: "center" }}>
              <AppText variant="p1" fontWeight="bold" color={theme.colors.blue}>
                {item.name}
              </AppText>
              <EmployeeMarker />
            </View>
          </Marker>
        ))}

      {route?.length && (
        <>
          <Marker
            icon={require("@/src/view/assets/icons/settings.svg")}
            coordinate={route[0]}
          >
            <FinishFlagMarker />
          </Marker>

          <Marker
            icon={require("@/src/view/assets/icons/finishFlag.svg")}
            coordinate={route[1]}
          >
            <GeolocationMarker />
          </Marker>
          <MapViewDirections
            precision="high"
            splitWaypoints
            optimizeWaypoints
            strokeWidth={6}
            strokeColor={theme.colors.blue}
            origin={route[0]}
            mode="DRIVING"
            destination={route[1]}
            // apikey={MAP_API_KEY}
            onReady={handleOnReady}
          />
        </>
      )}
    </MapView>
  );
};
