import { tmdb_api, tmdb_paths } from "../../../core/datasource/tmdb/tmdb_api";
import { tmdbMoviesTvAdapter } from "./adapters/tmdb.adapters";

export const getTrendingMovies = async () => {
  const { data } = await tmdb_api.get(tmdb_paths.movies.trending);
  console.log("data", data);
  return tmdbMoviesTvAdapter(data);
};

export const getPopularMovies = async () => {
  const { data } = await tmdb_api.get(tmdb_paths.movies.popular);
  console.log("data", data);
  return tmdbMoviesTvAdapter(data);
};
export const getTopRatedMovies = async () => {
  const { data } = await tmdb_api.get(tmdb_paths.movies.top_rated);

  return tmdbMoviesTvAdapter(data);
};

export const getUpcomingMovies = async () => {
  const { data } = await tmdb_api.get(tmdb_paths.movies.upcoming);

  return tmdbMoviesTvAdapter(data);
};
export const getPopularTv = async () => {
  const { data } = await tmdb_api.get(tmdb_paths.tv.popular);

  return tmdbMoviesTvAdapter(data);
};
export const getTopRatedTv = async () => {
  const { data } = await tmdb_api.get(tmdb_paths.tv.top_rated);

  return tmdbMoviesTvAdapter(data);
};
export const getAiringTodayTv = async () => {
  const { data } = await tmdb_api.get(tmdb_paths.tv.airing_today);

  return tmdbMoviesTvAdapter(data);
};
