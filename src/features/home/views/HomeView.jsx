import React from "react";
import { useAuth } from "../../../core/auth/hook/use_auth";
import AppButton from "../../../core/components/app_button/app_button";
import { AppSwiper } from "../../../core/components/app_swiper/app_swiper";
import AppSwiperSlide from "../../../core/components/app_swiper/components/app_swiper_slide";

const HomeView = ({ children }) => {
  const { logout, isLoggedIn } = useAuth();

  console.log(isLoggedIn);

  const getUser = () => {
    alert("User logged in");
  };

  return (
    <div>
      <h1>HOME</h1>
      <img
        style={{
          width: "50px",
        }}
        src="/public/R.png"
        alt="logo"
      />
      <button onClick={logout}>Cerrar Sesión</button>
      <AppButton onClick={getUser}>Mostrar alerta</AppButton>
      <h2>Peliculas mas vistas</h2>
      <AppSwiper>
        {Array.from({ length: 10 }).map((_, index) => (
          <AppSwiperSlide key={index}>
            <div
              style={{
                height: "150px",
                width: "250px",
                backgroundColor: "red",
              }}
            >
              <h3>Pelicula</h3>
            </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper>{" "}
      <h2>Peliculas mas vistas</h2>
      <AppSwiper>
        {Array.from({ length: 10 }).map((_, index) => (
          <AppSwiperSlide key={index}>
            <div
              style={{
                height: "150px",
                width: "250px",
                backgroundColor: "red",
              }}
            >
              <h3>Pelicula</h3>
            </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
    </div>
  );
};

export default HomeView;
