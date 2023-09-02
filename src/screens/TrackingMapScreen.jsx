import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { StyleSheet, View, Image } from "react-native";

export default function TrackingMapScreen() {
  const mapRef = useRef(null);

  const [region, setRegion] = useState({
    latitude: 41.7151,
    longitude: 44.8271,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const restaurantLatLng = { latitude: 41.7151, longitude: 44.8271 };
  const customerLatLng = { latitude: 41.7872, longitude: 44.7102 };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.fitToCoordinates([restaurantLatLng, customerLatLng], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: true,
      });
    }
  }, [mapRef]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        <Marker coordinate={restaurantLatLng} title="Restaurant">
          <Image
            source={require("../images/cat18.png")}
            style={{ height: 35, width: 35 }}
          />
        </Marker>
        <Marker coordinate={customerLatLng} title="Customer">
          <Image
            source={require("../images/begsMegs.png")}
            style={{ height: 35, width: 35 }}
          />
        </Marker>
        <Polyline
          coordinates={[restaurantLatLng, customerLatLng]}
          strokeWidth={2}
          strokeColor="blue"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
