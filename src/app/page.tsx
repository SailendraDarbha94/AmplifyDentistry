"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface ResponseData {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Movie[] | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [language, setLanguage] = useState<string>("en-US");
  const [region, setRegion] = useState<string>("USA");
  const [category, setCategory] = useState<string>("popular");
  const [movieName, setMovieName] = useState<string>("");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  };
  const nextPageOfMovies = async () => {
    setPageNumber((prev) => {
      return prev + 1;
    });
  };

  const prevPageOfMovies = async () => {
    if (pageNumber === 1) {
      console.error("Cannot go below page number 1");
      return;
    }
    setPageNumber((prev) => {
      return prev - 1;
    });
  };
  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?language=${language}&page=${pageNumber}&region=${region}`,
        options
      );
      const data: ResponseData = await res.json();
      if (data) {
        setData(data.results);
        setLoading(false);
      }
    } catch (err) {
      JSON.stringify(err);
      setLoading(false);
    }
  }, [pageNumber, language, region, category]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleLanguageChange = (event: any) => {
    setLanguage(event.target.value);
    console.log("Language selected:", event.target.value);
  };
  const handleRegionChange = (event: any) => {
    setRegion(event.target.value);
    console.log("Region Selected:", event.target.value);
  };
  const handleCategoryChange = (event: any) => {
    setCategory(event.target.value);
    console.log("Category Selected:", event.target.value);
  };
  const handleChange = (event: any) => {
    setMovieName(event.target.value);
    console.log("Movie Name:", event.target.value);
  };

  // const searchMovie = async () => {
  //   const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&language=${language}&page=${pageNumber}`;
  //   const res = await fetch(url, options);
  //   const data:ResponseData = await res.json();
  //   setData(data.results)
  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Hello World</h1>
      <div className="flex flex-col">
        {/* <label htmlFor="movie">movie name</label>
        <input name="movie" id="movie" type="text" value={movieName} onChange={handleChange} />
        <button onClick={searchMovie}>search</button> */}
        <div>
          <button
            disabled={pageNumber === 1}
            onClick={prevPageOfMovies}
            className={`${
              pageNumber === 1 ? "bg-red-300" : "bg-blue-200"
            } mt-10 p-2 rounded-md`}
          >
            Previous Page
          </button>{" "}
          <button
            onClick={nextPageOfMovies}
            className="bg-blue-200 mt-10 p-2 rounded-md"
          >
            Next Page
          </button>
        </div>
        <div>
          <label htmlFor="language-select">Choose a language:</label>
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en-US">English USA</option>
            <option value="en-GB">English UK</option>
            <option value="fr">French</option>
            <option value="ko">Korean</option>
            <option value="hi">hindi</option>
            <option value="bn">bengali</option>
          </select>
        </div>
        <div>
          <label htmlFor="region-select">Choose a Region:</label>
          <select
            id="region-select"
            value={region}
            onChange={handleRegionChange}
          >
            <option value="US">USA</option>
            <option value="FR">FRANCE</option>
            <option value="KO">SOUTH KOREA</option>
            <option value="IN">INDIA</option>
          </select>
        </div>
        <div>
          <label htmlFor="category-select">Choose a Category:</label>
          <select
            id="category-select"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="popular">Popular</option>
            <option value="top_rated">Top Rated</option>
            <option value="upcoming">Upcoming</option>
            <option value="now_playing">Now Playing</option>
          </select>
        </div>
      </div>
      {loading ? (
        <div
          role="status"
          className="flex
        min-h-96
        max-h-full
        justify-center
        items-center"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : null}
      {data ? (
        <div className="w-full">
          {data.map((movie: Movie) => {
            return (
              <div
                key={movie.id}
                className="m-2 relative shadow-md shadow-black rounded-lg"
              >
                <div
                  className="w-full m-auto rounded-lg h-full opacity-25 absolute"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
                    backgroundSize: "cover",
                  }}
                />
                <div className=" bg-slate-500 rounded-lg">
                  <h1 className="font-bold rounded-tr-lg rounded-tl-lg bg-purple-500">
                    Title: {movie.title}
                  </h1>
                  <h1>Original title: {movie.original_title}</h1>
                  <p>Original Language: {movie.original_language}</p>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="movie poster"
                    className="max-w-full max-h-80 rounded-lg"
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </main>
  );
}
