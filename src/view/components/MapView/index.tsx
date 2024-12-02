import React from "react";
import { View } from "react-native";
import { theme } from "../../styles";
import { AppText } from "@/src/uiKit/AppText";
import MapView, { Marker } from "react-native-maps";
import { Employees } from "@/src/data/employees";
import { styles } from "./styles";
import EmployeeMarker from "@/src/view/assets/icons/avatar.svg";

interface MapViewProps {}

export const MapViewComponent: React.FC<MapViewProps> = ({}) => {
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
      {Employees.employees.map((item, index) => (
        <Marker
          key={index}
          onPress={() => {}}
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
    </MapView>
  );
};
