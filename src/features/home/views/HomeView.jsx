import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getPopularTv,
  getTopRatedTv,
  getAiringTodayTv,
} from "../services/movies.services";
import useSWR from "swr";
import AppCarouselSection from "../../../core/components/app_carousel_section/app_carousel_section";
import AppFooter from "../../../core/components/app_footer/app_footer";
import AppHeader from "../../../core/components/app_header/app_header";

const HomeView = () => {
  const {
    data: popularMovies,
    error: popularMoviesError,
    isLoading: popularMoviesIsLoading,
  } = useSWR("getPopularMovies", getPopularMovies);

  const {
    data: topRatedMovies,
    error: topRatedMoviesError,
    isLoading: topRatedMoviesIsLoading,
  } = useSWR("getTopRatedMovies", getTopRatedMovies);

  const {
    data: upComingMovies,
    error: upComingMoviesError,
    isLoading: upComingMoviesIsLoading,
  } = useSWR("getUpcomingMovies", getUpcomingMovies);

  const {
    data: popularTv,
    error: popularTvError,
    isLoading: popularTvIsLoading,
  } = useSWR("getPopularTv", getPopularTv);

  const {
    data: topRatedTv,
    error: topRatedTvError,
    isLoading: topRatedTvIsLoading,
  } = useSWR("getTopRatedTv", getTopRatedTv);

  const {
    data: airingTodayTv,
    error: airingTodayTvError,
    isLoading: airingTodayTvIsLoading,
  } = useSWR("getAiringTodayTv", getAiringTodayTv);
  const {
    data: trendingMovies,
    error: trendingMoviesError,
    isLoading: trendingMoviesIsLoading,
  } = useSWR("getTrendingMovies", getTrendingMovies);

  // const getUser = () => {
  //   alert("User logged in");
  // };

  return (
    <div className="fondo-home">
      <AppHeader></AppHeader>
      {/* <Banner movies={trendingMovies} /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      ></div>

      {/* <AppButton onClick={getUser}>User Logged</AppButton> */}

      <AppCarouselSection title={"Popular Movies"} data={popularMovies} />
      <AppCarouselSection title={"Top Rated Movies"} data={topRatedMovies} />
      <AppCarouselSection title={"Up Coming Movies"} data={upComingMovies} />

      <AppCarouselSection title={"Popular TV"} data={popularTv} />
      <AppCarouselSection title={"Top Rated TV"} data={topRatedTv} />
      <AppCarouselSection title={"Airing Today TV"} data={airingTodayTv} />
      <AppCarouselSection title={"Trending Movies"} data={trendingMovies} />

      <AppFooter />
    </div>
  );
};

export default HomeView;
