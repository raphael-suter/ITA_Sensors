import registerRootComponent from "expo/build/launch/registerRootComponent";
import React from "react";
import CameraPage from "./CameraPage";

const App = () => <CameraPage />;

registerRootComponent(App);
