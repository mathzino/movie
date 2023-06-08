import { MovieiDetail } from "@/entities/movieEntities";
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "react-query";

export const useFetchMovieById = (id: string | null) => {
  return useQuery<MovieiDetail, Error>({
    queryFn: async () => {
      const productsResponse = await axiosInstance.get<MovieiDetail>(`/3/movie/${id}`);
      return productsResponse.data;
    },
    queryKey: ["fetch.movie", id],
  });
};
