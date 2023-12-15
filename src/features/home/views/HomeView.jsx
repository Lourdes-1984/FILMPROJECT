import React from "react";
import { useAuth } from "../../../core/auth/hook/use_auth";
import AppButton from "../../../core/components/app_button/app_button";
import { AppSwiper } from "../../../core/components/app_swiper/app_swiper";
import AppSwiperSlide from "../../../core/components/app_swiper/components/app_swiper_slide";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getPopularTv,
} from "../services/movies.services";
import useSWR from "swr";
import AppCarouselSection from "../../../core/components/app_carousel_section/app_carousel_section";
import AppCard from "../../../core/components/app_card/app_card";
import Logo from "../../../core/components/logo/logo";
import AppFooter from "../../../core/components/app_footer/app_footer";
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

  const { logout, isLoggedIn } = useAuth();

  const getUser = () => {
    alert("User logged in");
  };

  return (
    <div className="fondo-home">
      <Logo />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          onClick={logout}
          style={{
            backgroundColor: "#e50914",
            display: "block",
            color: "white",
            padding: "12px",
            width: "15%",
            margin: "  20px 80px",
            border: "none",
            borderRadius: "4px",
            cursor: " pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Cerrar Sesión
        </button>
      </div>

      {/* <AppButton onClick={getUser}>User Logged</AppButton> */}

      <AppCarouselSection title={"Popular Movies"} data={popularMovies} />
      <AppCarouselSection title={"Top Rated Movies"} data={topRatedMovies} />
      <AppCarouselSection title={"Up Coming Movies"} data={upComingMovies} />
      <AppCarouselSection title={"Popular TV"} data={popularTv} />

      {/* <AppCard data={""}>
        <AppCard.Header>Hola</AppCard.Header>
        <AppCard.Body>Hola</AppCard.Body>
        <AppCard.Footer>Hola</AppCard.Footer>
      </AppCard> */}
      <AppFooter />
    </div>
  );
};

export default HomeView;
