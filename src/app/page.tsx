"use client";
import MoviesList from "@/components/MoviesList";
import { Movie, ResponseData } from "@/constants/interfaces";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [movieName, setMovieName] = useState<string>("");

  // const searchMovie = async () => {
  //   const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&language=${language}&page=${pageNumber}`;
  //   const res = await fetch(url, options);
  //   const data:ResponseData = await res.json();
  //   setData(data.results)
  // };

  return (
    <>
      <MoviesList />
    </>
  );
}
