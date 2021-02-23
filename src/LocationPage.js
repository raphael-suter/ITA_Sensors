import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Location from "expo-location";

const LocationPage = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    const {
      coords: { latitude, longitude },
    } = location;

    text = `${latitude}, ${longitude}`;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{text}</Text>
    </View>
  );
};

export default LocationPage;
