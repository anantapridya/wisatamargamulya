import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./card/Card";
import data from "../data/data.json";

export default function Carousel(props) {
  const dataset = props.data || data;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div onBlur={() => console.log("onblur")}>
      <Slider {...settings}>
        {data.map((item, key) => {
          return (
            <div key={key} className="w-full h-full">
              <img src={item.foto[0]} className="w-full h-full" />
              {/* <Card bg={item.thumbnail} nama={item.nama} /> */}
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
