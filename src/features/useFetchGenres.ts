import { Genre } from "../constants/genres"; // Sesuaikan jalur impor sesuai dengan struktur proyek Anda
import { genres } from "../constants/genres";

export const useFetchGenres = (genreIDs: number[]): Genre[] => {
  const fetchedGenres = genreIDs.map((id) => genres.find((genre) => genre.id === id)).filter((genre): genre is Genre => genre !== undefined);

  return fetchedGenres;
};
