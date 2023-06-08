"use client";
import { useFetchMovies } from "@/features/useFetchMovies";
import { useEffect, useState } from "react";
import React from "react";
import { UseQueryResult } from "react-query";

import Link from "next/link";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import usePagination from "@/features/usePagination";
import CardMovie from "@/components/cardMovie";
import CardMovieLoad from "@/components/cardMovieLoad";
import { FetchMovieResponse, Movie, PaginationData } from "@/entities/movieEntities";

export default function Movies() {
  type pageParamType = number | null;

  const { currentPage, pages, pageChange }: PaginationData = usePagination();

  const searchParam: ReadonlyURLSearchParams = useSearchParams();

  const pageParam: pageParamType = parseInt(searchParam.get("page") || "1");

  const { data: movies, isLoading }: UseQueryResult<FetchMovieResponse> = useFetchMovies(pageParam);

  const componentLoader = Array(10)
    .fill(0)
    .map((_, index) => index + 1);

  function getPreviousPageUrl(): string {
    if (currentPage > 1) return "?page=" + (currentPage - 1);
    return "?page=1";
  }

  function getNextPageUrl(): string {
    if (currentPage < 500) return "?page=" + (currentPage + 1);
    return "?page=500";
  }

  function getPageUrl(page: number): string {
    return "?page=" + page;
  }

  useEffect(() => {
    pageChange(pageParam);
  }, [pageParam]);

  return (
    <div className=" bg-white flex justify-center items-center flex-col h-[100vh] px-6">
      <div className="  flex  gap-8  overflow-x-auto w-full px-6 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-slate py-8">
        {isLoading && componentLoader.map(() => <CardMovieLoad />)}
        {movies?.results.map((movie: Movie): React.ReactNode => {
          return <CardMovie title={movie.title} vote_average={movie.vote_average} vote_count={movie.vote_count} genre_ids={movie.genre_ids} overview={movie.overview} id={movie.id} poster_path={movie.poster_path} />;
        })}
      </div>
      <nav aria-label="Page navigation example" className=" mt-8">
        <ul className="inline-flex -space-x-px">
          <Link href={getPreviousPageUrl()}>
            <div className="px-3 py-2 ml-0 leading-tight cursor-pointer  rounded-l-lg  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">Previous</div>
          </Link>
          {pages.map((page) => {
            return (
              <Link href={getPageUrl(page)}>
                <div className={` w-16 px-3 py-2 text-center leading-tight cursor-pointer   border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white ${page == pageParam ? "bg-gray-700" : "bg-gray-800"}`}>{page}</div>
              </Link>
            );
          })}
          <Link href={getNextPageUrl()}>
            <div className="px-3 py-2 leading-tight cursor-pointer  rounded-r-lg  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">Next</div>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
