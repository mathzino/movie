"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";

import { truncateOverview } from "@/lib/truncateOverview";
import { useFetchGenres } from "@/features/useFetchGenres";

type CardMovieParam = {
  genre_ids: number[];
  id: number;
  overview: string;
  title: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
};

export default function CardMovie({ title, vote_average, vote_count, genre_ids, overview, id, poster_path }: CardMovieParam) {
  const genres = useFetchGenres(genre_ids);
  return (
    <Link href={"movie?id=" + id}>
      <div className=" bg-white antialiased text-gray-900 w-80 shadow-lg  h-[480px] ">
        <div>
          <div className="bg-white  ">
            <div className=" pb-4 relative w-full h-60">
              <Image src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + poster_path} alt=" random imgee" fill={true} className=" object-cover object-center  shadow-md" />
            </div>
            <div className="p-8 w-80 ">
              <div className="flex items-baseline  gap-1 flex-wrap ">
                {genres.map((genre) => {
                  return <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">{genre?.name}</span>;
                })}
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{title}</h4>

              <div className="mt-1">{truncateOverview(overview)}</div>
              <div className="mt-4">
                <span className="text-teal-600 text-md font-semibold">{vote_average} ratings </span>
                <span className="text-sm text-gray-600">(based on {vote_count} ratings)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
