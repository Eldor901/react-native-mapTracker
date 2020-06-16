import "../src/_mockLocation";
import React, {useCallback, useContext} from "react";
import { View, StyleSheet } from "react-native";
import { withNavigationFocus, SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";
import Map from "./components/Map";
import { Context as LocationContext } from "../src/context/LocationContext";
import useLocation from "./hooks/useLocation";
import TrackForm from "./components/TrackForm";
import Spacer from "./components/Spacer";

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback(location=>{
      addLocation(location, state.recording);
  }, [state.recording]);

  const [err] = useLocation(isFocused || state.recording, callback);



  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create a Track</Text>
      <Map />
      {err ? <Text> Please enable Location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
