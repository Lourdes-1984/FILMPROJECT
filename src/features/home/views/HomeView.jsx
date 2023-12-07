import React from "react";
import { useAuth } from "../../../core/auth/hook/use_auth";
import AppButton from "../../../core/components/app_button/app_button";
import { AppSwiper } from "../../../core/components/app_swiper/app_swiper";
import AppSwiperSlide from "../../../core/components/app_swiper/components/app_swiper_slide";
import {
  getPopularMovies,
  getTopRatedMovies,
} from "../services/movies.services";
import useSWR from "swr";

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

  const { logout, isLoggedIn } = useAuth();

  const getUser = () => {
    alert("User logged in");
  };

  return (
    <div>
      <h1>HOME</h1>

      <button onClick={logout}>Cerrar Sesión</button>
      <AppButton onClick={getUser}>Mostrar alerta</AppButton>
      <h2>Peliculas mas vistas</h2>
      <AppSwiper>
        {popularMovies?.map((e, index) => (
          <AppSwiperSlide key={index}>
            <div
              style={{
                height: "150px",
                width: "250px",
                // backgroundColor: "red",
                backgroundImage: `url(${e.backdrop})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "20px",
              }}
            >
              <h3>{e.title}</h3>
            </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
      <h2>Peliculas mas vistas</h2>
      <AppSwiper>
        {topRatedMovies?.map((e, index) => (
          <AppSwiperSlide key={index}>
            <div
              style={{
                height: "150px",
                width: "250px",
                // backgroundColor: "red",
                backgroundImage: `url(${e.backdrop})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "20px",
              }}
            >
              <h3>{e.title}</h3>
            </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
    </div>
  );
};

export default HomeView;
