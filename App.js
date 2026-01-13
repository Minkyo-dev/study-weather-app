import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from 'expo-location';

// const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SCREEN_WIDTH = Dimensions.get("window").width;

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEO_API_KEY;
console.log("apiKey : ", apiKey);

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [city, setCity] = useState(null);

  // 허가 여부
  const [permmited, setPermitted] = useState(true);

  const locationData = async () => {
    // 권한 요청
    const { granted } = await Location.requestForegroundPermissionsAsync();
    console.log(granted);
    if (!granted) {
      setPermitted(false);
      setErrorMsg("위치에 대한 권한 부여가 거부되었습니다.");
      return;
    }
    
    // 좌표 가져오기
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({accuracy: 5});
    console.log(latitude);
    console.log(longitude);

    const address = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps: false});
    console.log(address);

    const cityAddr = address[0].city;
    setCity(cityAddr);
    console.log(cityAddr);

  }

  useEffect(() => {
    locationData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.cityCon}>
        <Text style={styles.city}>{city}</Text>
      </View>
      <View style={styles.regDateCon}>
        <Text style={styles.regDate}>1월 11일, 일, 10:05</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weatherCon}
      >
        <View style={styles.weatherInner}>
          <View style={styles.day}>
            <Text style={styles.desc}>Sunny</Text>
          </View>
          <View style={styles.tempCon}>
            <Text style={styles.temp}>24</Text>
          </View>
        </View>
        <View style={styles.weatherInner}>
          <View style={styles.day}>
            <Text style={styles.desc}>Sunny</Text>
          </View>
          <View style={styles.tempCon}>
            <Text style={styles.temp}>24</Text>
          </View>
        </View>
        <View style={styles.weatherInner}>
          <View style={styles.day}>
            <Text style={styles.desc}>Sunny</Text>
          </View>
          <View style={styles.tempCon}>
            <Text style={styles.temp}>24</Text>
          </View>
        </View>
        <View style={styles.weatherInner}>
          <View style={styles.day}>
            <Text style={styles.desc}>Sunny</Text>
          </View>
          <View style={styles.tempCon}>
            <Text style={styles.temp}>24</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe01a",
  },
  cityCon: {
    flex: 0.3,
  },
  city: {
    flex: 1,
    marginTop: 50,
    paddingTop: 20,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  regDateCon: {
    alignItems: "center",
  },
  regDate: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    borderRadius: 20,
    overflow: "hidden",
  },
  weatherCon: {},
  weatherInner: {
    flex: 0.5,
    width: SCREEN_WIDTH,
  },
  day: {
    flex: 0.1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  desc: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  tempCon: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    fontSize: 120,
  },
});

export default App;
