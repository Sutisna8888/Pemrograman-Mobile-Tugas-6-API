import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Rating } from "react-native-ratings"; 
import Carousel from "react-native-reanimated-carousel";
import { RootStackParamList } from "../navigation/StackNavigator";

type GameDetailRouteProp = RouteProp<RootStackParamList, "GameDetail">;

const { width } = Dimensions.get("window");

const GameDetailScreen: React.FC = () => {
  const route = useRoute<GameDetailRouteProp>();
  const game = route.params?.game;

  if (!game || typeof game !== "object") {
    return (
      <View style={styles.container}>
        <Text style={{ padding: 16 }}>Game tidak ditemukan</Text>
      </View>
    );
  }

  const numericRating = parseFloat(game.rating) || 0;

  const screenshots = Array.isArray(game.screenshots) ? game.screenshots : [];

  return (
    <ScrollView style={styles.container}>
      {/* Header Image */}
      <Image source={{ uri: game.image }} style={styles.image} />

      {/* Game Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{game.name}</Text>
        <Text style={styles.developer}>{game.developer}</Text>

        <View style={styles.statsRow}>
          <Text style={styles.statsText}>⭐ {game.rating}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.statsText}>{game.downloads} unduhan</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.statsText}>{game.size}</Text>
        </View>

        <TouchableOpacity style={styles.installButton}>
          <Text style={styles.installText}>Install</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tentang Game Ini</Text>
        <Text style={styles.description}>{game.descriptions}</Text>
      </View>

      {/*Carousel Screenshot */}
      {screenshots.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cuplikan Layar</Text>
          <Carousel
            width={width}
            height={220}
            data={screenshots}
            renderItem={({ item }: { item: string }) => (
              <Image source={{ uri: item }} style={styles.screenshot} />
            )}
            loop
            autoPlay
            autoPlayInterval={3500}
            pagingEnabled
          />
        </View>
      )}

      {/*Rating Section */}
      <View style={styles.ratingContainer}>
        <Text style={styles.sectionTitle}>Penilaian</Text>
        <Rating
          type="custom"
          ratingCount={5}
          imageSize={28}
          readonly
          startingValue={numericRating}
          tintColor="#fafafa"
          ratingColor="rgba(255, 215, 0, 1)ff" 
          ratingBackgroundColor="#ddd" 
          style={{ marginTop: 8 }}
        />
        <Text style={{ marginTop: 8, fontSize: 15, color: "#444" }}>
          {numericRating.toFixed(1)} / 5
        </Text>
      </View>

      {/*Informasi Tambahan*/}
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Informasi Tambahan</Text>

      <View style={styles.infoGrid}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Versi</Text>
          <Text style={styles.infoValue}>{game.version}</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Kategori</Text>
          <Text style={styles.infoValue}>{game.category}</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Developer</Text>
          <Text style={styles.infoValue}>{game.developer}</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Ukuran</Text>
          <Text style={styles.infoValue}>{game.size}</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Unduhan</Text>
          <Text style={styles.infoValue}>{game.downloads}</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Rating</Text>
          <Text style={styles.infoValue}>{game.rating} ★</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default GameDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 230,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  infoContainer: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },
  developer: {
    fontSize: 14,
    color: "#777",
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  statsText: {
    color: "#555",
    fontSize: 13,
  },
  dot: {
    color: "#aaa",
    marginHorizontal: 6,
  },
  installButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  installText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  divider: {
    height: 10,
    backgroundColor: "#f2f2f2",
    marginVertical: 10,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#222",
  },
  description: {
    color: "#444",
    lineHeight: 20,
    fontSize: 14,
  },
  screenshot: {
    width: width * 0.85,
    height: 220,
    borderRadius: 12,
    resizeMode: "cover", 
    alignSelf: "center",
  },
  ratingContainer: {
    alignItems: "center",
    marginBottom: 25,
    backgroundColor: "#fafafa",
    paddingVertical: 12,
    borderRadius: 10,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  meta: {
    fontSize: 13,
    color: "#070606ff",
    marginBottom: 4,
  },
  infoGrid: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginTop: 10,
  },
  infoItem: {
    width: "48%",
    backgroundColor: "#f7f9fc",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  infoLabel: {
    fontSize: 13,
    color: "#777",
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
  },

});
