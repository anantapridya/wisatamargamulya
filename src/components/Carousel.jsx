import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./card/Card";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";

export default function Carousel(props) {
  const [display, setDisplay] = useState(4);
  const navigate = useNavigate()
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {props.content}
        {/* {data.map((item, key) => {
          return (
            <div key={key}>
              <Card bg={item.thumbnail} nama={item.nama} onClick={() => navigate(`/wisata/${item.path}`)} />
            </div>
          );
        })} */}
      </Slider>
    </div>
  );
}
