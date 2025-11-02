import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Game } from "../types/Game";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";

interface Props {
  game: Game;
}

const GameCard: React.FC<Props> = ({ game }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("GameDetail", { game })}
    >
      <Image source={{ uri: game.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{game.name}</Text>
        <Text style={styles.category}>{game.category}</Text>
        <Text style={styles.meta}>
          {game.downloads} • ⭐ {game.rating}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GameCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  category: {
    color: "#777",
    fontSize: 13,
  },
  meta: {
    fontSize: 12,
    marginTop: 4,
    color: "#444",
  },
});
