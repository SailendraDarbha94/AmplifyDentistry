"use client";
import { Movie } from "@/constants/interfaces";
const MovieItem = ({ ...Movie }: Movie) => {
  return (
    <div className="relative max-w-screen-md mx-auto mb-4">
      <div
        className="w-full rounded-lg h-full opacity-25 absolute"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${Movie.backdrop_path})`,
          backgroundSize: "cover",
        }}
      />
      <div className="bg-slate-900 rounded-lg">
        <h1 className="font-bold rounded-tr-lg p-2 text-center text-white text-3xl  rounded-tl-lg bg-slate-900">
          {Movie.title}
        </h1>
        <div className="flex flex-wrap items-center pb-4">
          <div className="w-full md:w-2/3">
            <p className="p-4 text-white text-lg font-light">
              {Movie.overview}
            </p>
            <h3 className="text-white px-4 flex items-center">
              {Movie.vote_count}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 mb-1 h-5 w-5"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#0040ff"
                  d="M9.58 1.052c-.75-.209-1.336.35-1.545.871c-.24.6-.453 1.021-.706 1.524a45 45 0 0 0-.533 1.09c-.475 1.01-.948 1.656-1.293 2.045a4 4 0 0 1-.405.402a2 2 0 0 1-.101.081l-.016.012L3.109 8.18a2 2 0 0 0-.856 2.426l.52 1.384a2 2 0 0 0 1.273 1.205l5.356 1.682a2.5 2.5 0 0 0 3.148-1.68l1.364-4.647a2 2 0 0 0-1.92-2.563H10.61c.066-.227.133-.479.195-.74c.131-.562.243-1.203.232-1.738c-.009-.497-.06-1.019-.264-1.462c-.219-.475-.602-.832-1.192-.996M4.978 7.08l-.002.001Z"
                />
              </svg>
            </h3>
            <h3 className="text-white px-4">Released : {Movie.release_date}</h3>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
              alt="movie poster"
              className="max-w-full mx-auto max-h-80 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
