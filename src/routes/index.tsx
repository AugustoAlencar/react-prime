import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../pages/Home";
import Movies from "../pages/Movies";
import StackRoutes from "./stackRoutes";

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#090A0E",
          paddingTop: 20,
        },

        drawerActiveBackgroundColor: "#E72F49",
        drawerActiveTintColor: "#FFF",
        drawerInactiveTintColor: "#FFF",
      }}
    >
      {/* <Drawer.Screen name="Home" component={Home} /> */}
      <Drawer.Screen
        name="HomeDrawer"
        component={StackRoutes}
        options={{
          title: "Home",
          drawerIcon: (props: {
            focused: boolean;
            size: number;
            color: string;
          }) => {
            return (
              <MaterialCommunityIcons
                name={props.focused ? "movie-open" : "movie-outline"}
                size={props.size}
                color={props.color}
              />
            ) as React.ReactNode;
          },
        }}
      />
      <Drawer.Screen
        name="Movies"
        component={Movies}
        options={{
          title: "Meus Filmes",
          drawerIcon: (props: {
            focused: boolean;
            size: number;
            color: string;
          }) => {
            return (
              <MaterialCommunityIcons
                name={props.focused ? "archive" : "archive-outline"}
                size={props.size}
                color={props.color}
              />
            ) as React.ReactNode;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default Routes;
