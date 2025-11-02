import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameScreen from "../screens/GameScreen";
import GameDetailScreen from "../screens/GameDetailScreen";
import { Game } from "../types/Game";

export type RootStackParamList = {
  GameList: undefined;
  GameDetail: { game: Game };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GameList"
          component={GameScreen}
          options={{ title: "Daftar Game" }}
        />
        <Stack.Screen
          name="GameDetail"
          component={GameDetailScreen}
          options={{ title: "Detail Game" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
