import { Game } from "../types/Game";

const BASE_URL = "https://69038bc3d0f10a340b24d55b.mockapi.io/games/game"; 

export const getGames = async (): Promise<Game[]> => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Gagal memuat data game");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
