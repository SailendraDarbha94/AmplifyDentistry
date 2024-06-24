"use client";
import MovieItem from "@/components/MovieItem";
import MoviesList from "@/components/MoviesList";
import { Movie, ResponseData } from "@/constants/interfaces";
import { ToastContext } from "@/providers/ToastContextProvider";
import Image from "next/image";
import { useCallback, useContext, useEffect, useState } from "react";

export default function Home() {
  const [movieName, setMovieName] = useState<string>("");
  const [data, setData] = useState<Movie[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { toast } = useContext(ToastContext);
  const searchMovie = useCallback(async () => {
    setLoading(true);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&language=en-US`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      });
      const data: ResponseData = await res.json();
      setData(data.results);
      toast({
        message: "Movies Fetched!",
        type: "success"
      })
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast({
        message: "An Error Occured!",
        type: "failure"
      })
      console.log(JSON.stringify(err));
    }
  }, [movieName]);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center py-4 mb-4">
        <div className="w-full">
          <h1 className="text-xl text-center mb-2">Search Movies By Name</h1>
        </div>
        <label
          htmlFor="movie-name"
          className="inline-block h-full text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          type="text"
          name="movie-name"
          id="movie-name"
          className="mx-2 rounded-lg focus:outline-none p-2"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button
          onClick={searchMovie}
          className="bg-emerald-300 mx-2 font-semibold p-2 text-sm rounded-lg"
        >
          Search
        </button>
      </div>

      {data ? (
        <>
          {data.map((movie: Movie) => {
            return <MovieItem key={movie.id} {...movie} />;
          })}
        </>
      ) : (
        <MoviesList />
      )}
    </>
  );
}
