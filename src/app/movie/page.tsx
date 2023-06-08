"use client";
import React from "react";
import { useSearchParams, ReadonlyURLSearchParams } from "next/navigation";
import { useFetchMovieById } from "@/features/useFetchMovieById";
import Image from "next/image";
import { Genre } from "@/constants/genres";
import { UseQueryResult } from "react-query";
import { MovieiDetail } from "@/entities/movieEntities";
export default function Movie() {
  type idMovie = string | null;

  const searchParam: ReadonlyURLSearchParams = useSearchParams();

  const id: idMovie = searchParam.get("id");

  const { data: detailMovie, isLoading }: UseQueryResult<MovieiDetail> = useFetchMovieById(id);
  if (isLoading) return;
  if (detailMovie) {
    return (
      <div className=" px-60 h-screen w-full py-4  overflow-hidden">
        <Image
          src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + detailMovie.backdrop_path}
          alt="image movie"
          fill
          style={{ objectFit: "cover" }}
          className="  blur brightness-50 backdrop-saturate-50 backdrop-brightness-0 absolute -z-10 "
        />
        <div className="flex gap-8 ">
          <div className=" w-[300px] h-[450px] relative overflow-hidden rounded-md shrink-0 ">
            <Image src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + detailMovie.poster_path} alt="image movie" fill className="  object-cover" style={{ objectFit: "cover" }} objectFit="cover" />
          </div>
          <div className="py-8">
            <div className="  text-white font-bold text-3xl">{detailMovie.title}</div>
            <div className=" flex gap-2">
              {detailMovie.genres.map((genre: Genre) => {
                return <span className="mt-2 bg-teal-500 text-white text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">{genre?.name}</span>;
              })}
            </div>
            <div className=" mt-5">
              <div className=" text-white font-semibold ">Overview</div>
              <div className=" text-white mt-4">{detailMovie.overview}</div>
            </div>
            <div className=" mt-5">
              <div className=" text-white ">
                Homepage :
                <a className="hover:text-blue-400" href={detailMovie.homepage}>
                  {detailMovie.homepage}
                </a>
              </div>
              <div className=" text-white "> Languages : {detailMovie.spoken_languages.map((language, i) => (i == 0 ? language.english_name : ", " + language.english_name))}</div>
            </div>
            <div className="mt-4 font-semibold">
              <span className="text-teal-600 text-md font-semibold">{detailMovie.vote_average} ratings </span>
              <span className="text-sm text-white">(based on {detailMovie.vote_count} ratings)</span>
            </div>
            <div className="mt-6 font-semibold">
              <div>Production Companies</div>
              <div className=" flex gap-4 mt-4 items-center">
                {detailMovie.production_companies.map((company) => {
                  return (
                    <div className=" overflow-hidden relative w-12 ">
                      <img src={"https://image.tmdb.org/t/p/w500/" + company.logo_path} style={{ objectFit: "cover" }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return;
}
