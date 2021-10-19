import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Routes />
    </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  container: {
    /* flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
    
    <View style={styles.container}>
      
      <StatusBar style="auto" />
    </View>
    
  },
}); */
