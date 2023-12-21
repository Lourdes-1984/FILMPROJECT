import React, { useState } from "react";
// import { randomNumberService } from "../services/random_number_service";
// import { TMDB_PATHS } from '../../datasources/remotes/tmdb/tmdb_paths';
import { tmdb_paths } from "../../datasource/tmdb/tmdb_api";

const Banner = ({ movies }) => {
  const id = randomNumberService(movies.length);

  return (
    <>
      {movies.length ? (
        <div
          style={{ backgroundImage: `url(${movies[id].backdrop})` }}
          className={
            "w-full h-[720px] mb-24 flex flex-col bg-cover bg-center brightness-75"
          }
        ></div>
      ) : (
        ""
      )}
    </>
  );
};

export default Banner;
