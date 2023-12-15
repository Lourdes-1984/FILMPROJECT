import React from "react";
import AppSwiperSlide from "../app_swiper/components/app_swiper_slide";
import { AppSwiper } from "../app_swiper/app_swiper";
import AppTitle from "../app_title/app_title";
import AppCard from "../app_card/app_card";
import { sizes } from "../../constants";

const AppCarouselSection = ({ title, data }) => {
  return (
    <>
      <AppTitle>{title}</AppTitle>
      <AppSwiper>
        {data?.map((e, index) => (
          <AppSwiperSlide key={e.width}>
            <AppCard height="450px" width="300px" backgroundImageSrc={e.poster}>
              <AppCard.Header>
                <AppTitle size={sizes.md}>{e.title}</AppTitle>
              </AppCard.Header>
              <AppCard.Footer>
                <AppTitle size={sizes.sm}>{e.title}</AppTitle>

                {e.description}
              </AppCard.Footer>
            </AppCard>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
    </>
  );
};

export default AppCarouselSection;
