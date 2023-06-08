import { FetchMovieResponse, Movie } from "@/entities/movieEntities";
import { axiosInstance } from "@/lib/axios";
import { useQuery, UseQueryResult } from "react-query";

export const useFetchMovies = (currentPage: number | null): UseQueryResult<FetchMovieResponse> => {
  return useQuery<FetchMovieResponse, Error>({
    queryFn: async () => {
      let url = "/3/discover/movie";

      if (currentPage) {
        url += `?page=${currentPage}`;
      }

      const response = await axiosInstance.get<FetchMovieResponse>(url);
      return response.data;
    },
    queryKey: ["fetch.movies", currentPage],
  });
};
