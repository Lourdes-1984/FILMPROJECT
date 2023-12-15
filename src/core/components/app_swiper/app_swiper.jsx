import { useRef, useEffect, useState } from "react";

export const AppSwiper = ({ children }) => {
  const swiperElRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <swiper-container
      ref={swiperElRef}
      loop
      slides-per-view="4"
      navigation="true"
      // pagination="true"
    >
      {children}
    </swiper-container>
  );
};
