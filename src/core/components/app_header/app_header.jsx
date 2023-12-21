import React from "react";
import Logo from "../logo/logo";
import AppNavbar from "../app_navbar/app_navbar";
import { useAuth } from "../../auth/hook/use_auth";
import AppCard from "../app_card/app_card";
import AppTitle from "../app_title/app_title";
import { sizes } from "../../constants";
import AppCarouselSection from "../app_carousel_section/app_carousel_section";
import useSWR from "swr";
import { getPopularMovies } from "../../../features/home/services/movies.services";

const AppHeader = () => {
  const { logout, isLoggedIn } = useAuth();

  return (
    <div className="header">
      <AppCarouselSection />
      <div className="nav-bar">
        <Logo />
        <AppNavbar />
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-regular fa-bell"></i>
        <button
          className="btn-cerrar-sesion"
          onClick={logout}
          style={{
            backgroundColor: "#e50914",
            display: "block",
            color: "white",
            padding: "10px",
            width: "10%",
            margin: "  20px 80px",
            border: "none",
            borderRadius: "4px",
            cursor: " pointer",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Cerrar Sesión
        </button>
      </div>
      <div className="btn-repro">
        <button
          className="btn-repro-hover"
          style={{
            backgroundColor: "#333333",
            display: "block",
            color: "white",
            padding: "10px",
            width: "140px",
            border: "none",
            borderRadius: "4px",
            cursor: " pointer",
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <i className="fa-solid fa-play"></i>
          Reproducir
        </button>
      </div>
    </div>
  );
};

export default AppHeader;
