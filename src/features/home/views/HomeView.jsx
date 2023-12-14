import React from "react";
import { useAuth } from "../../../core/auth/hook/use_auth";
import AppButton from "../../../core/components/app_button/app_button";
import { AppSwiper } from "../../../core/components/app_swiper/app_swiper";
import AppSwiperSlide from "../../../core/components/app_swiper/components/app_swiper_slide";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../services/movies.services";
import useSWR from "swr";
import AppCarouselSection from "../../../core/components/app_carousel_section/app_carousel_section";
import AppCard from "../../../core/components/app_card/app_card";

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

  const { logout, isLoggedIn } = useAuth();

  const getUser = () => {
    alert("User logged in");
  };

  return (
    <div>
      <h1>HOME</h1>

      <button onClick={logout}>Cerrar Sesión</button>
      <AppButton onClick={getUser}>Mostrar alerta</AppButton>

      <AppCarouselSection title={"Popular Movies"} data={popularMovies} />
      <AppCarouselSection title={"Top Rated Movies"} data={topRatedMovies} />
      <AppCarouselSection title={"Popular Series"} data={upComingMovies} />

      {/* <AppCard data={""}>
        <AppCard.Header>Hola</AppCard.Header>
        <AppCard.Body>Hola</AppCard.Body>
        <AppCard.Footer>Hola</AppCard.Footer>
      </AppCard> */}
    </div>
  );
};

export default HomeView;
