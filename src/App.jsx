import React from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/routes/app_router";
import RootProvider from "./core/providers/root_provider";
import "./index.css";
//Swiper
import { register as registerSwiper } from "swiper/element/bundle";
registerSwiper();

const App = () => {
  return (
<<<<<<< HEAD
    <>
      <RootProvider>
        <RouterProvider router={appRouter} />
      </RootProvider>
    </>
=======
    <div>
      <h1>APP PARA PELIS </h1>
      <h2>PRODUCCION</h2>
    </div>
>>>>>>> origin/PROD
  );
};

export default App;
