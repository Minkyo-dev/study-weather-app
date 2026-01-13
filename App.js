import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import React, { useState } from "react";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const App = () => {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.cityCon}>
        <Text style={styles.city}>Toronto</Text>
      </View>
      <View style={styles.regDateCon}>
        <Text style={styles.regDate}>1월 11일, 일, 10:05</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
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
  weather: {},
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
