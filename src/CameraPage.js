import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Camera } from "expo-camera";

const CameraPage = () => {
  let camera = null;
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    console.log(photo);
  };

  return (
    <Camera
      style={{ flex: 1 }}
      ref={(r) => {
        camera = r;
      }}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: "transparent",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            position: "absolute",
            bottom: 0,
            flexDirection: "row",
            flex: 1,
            width: "100%",
            padding: 20,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              alignSelf: "center",
              flex: 1,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={takePicture}
              style={{
                width: 70,
                height: 70,
                bottom: 0,
                borderRadius: 50,
                backgroundColor: "#fff",
              }}
            />
          </View>
        </View>
      </View>
    </Camera>
  );
};

export default CameraPage;
