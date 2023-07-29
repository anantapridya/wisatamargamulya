import React, { useState } from "react";
import thumbnail from "../assets/thumbnail.jpg";
import template from "../assets/template1.svg";
import templatekiri from "../assets/templatekiri.svg";
import templatekanan from "../assets/templatekanan.svg";
import megamendung from "../assets/megamendung.svg";
import megamendung2 from "../assets/megamendung2.svg"
import margamulya from "../assets/margamulya.svg"
import data from "../data/data.json"

import Navbar from "../components/Navbar";
import { Element, Link } from "react-scroll";
import Card from "../components/card/Card";
import Carousel from "../components/carousel/Carousel";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate()
  return (
    <div>
      <div
        className="w-full h-[100vh] bg-cover bg-center flex flex-col items-center justify-center relative bg-fixed"
        style={{ backgroundImage: `url(${thumbnail})` }}
      >
        <Navbar page={1} />
        <div className="flex flex-col items-center">
          <p className="font-rubik font-bold text-3xl sm:text-[40px] md:text-[75px] lg:text-[84px] text-white pl-[25px] md:pl-14">
            EXPLORE
          </p>
          <p className="font-indo font-normal text-[50px] sm:text-[114px] md:text-[130px] lg:text-[160px] text-oren mt-[-15px] md:mt-[-30px]">
            Margamulya
          </p>
          <p className="font-rubik md:text-2xl text-center font-medium text-white bg-gray-100 mx-6 backdrop-blur-sm bg-opacity-20 px-4 md:px-11 py-2 rounded-3xl md:mt-[-20px]">
            Kecamatan Pangalengan, Bandung Selatan
          </p>
        </div>
        <div
          className="absolute w-full bottom-0 h-[175px] bg-cover bg-center flex items-center justify-center "
          style={{ backgroundImage: `url(${template})` }}
        >
          <Link to="main" smooth={true} duration={1000}>
            <div className="aspect-square w-16 cursor-pointer "></div>
          </Link>
        </div>
      </div>

      {/* Shadoww */}

      <Element name="main">
        <div className="md:h-[100vh] w-full py-20 px-11">
          <div className="flex flex-col h-full items-center relative justify-center gap-y-11">
            <img
              src={templatekiri}
              className=" md:absolute hidden md:inline left-[100px] bottom-[-400px] -z-10"
            />
            <p className="font-rubik font-semibold text-3xl md:text-5xl text-center text-oren">
              MENGENAL LEBIH DEKAT
            </p>
            <div
              className="flex flex-col gap-y-5 xl:grid xl:grid-cols-2 justify-center items-center xl:w-[1050px] rounded-3xl px-[40px] py-[30px] xl:py-[70px] xl:px-[60px]"
              style={{
                background: "linear-gradient(180deg, #F9C828 0%, #F7971F 100%)",
              }}
            >
              <div className="aspect-square w-[200px] md:w-[400px] flex items-center rounded-3xl">
                <img src={margamulya} alt="margamulya" />
              </div>
              <div>
                <p className="font-indo text-[40px] text-center xl:text-left md:text-[82px] text-white">Margamulya</p>
                <p className="font-rubik text-white text-justify text-base md:text-lg">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
            <img
              src={templatekanan}
              className="absolute hidden md:inline right-[100px] bottom-[-400px] -z-10"
            />
          </div>
        </div>
        <div className=" ">
          <div
            className="py-10 px-14 md:py-24 md:px-40 flex flex-col gap-y-14 mt-[150px] relative"
            style={{
              "borderRadius": "50px 50px 0px 0px",
              background: "linear-gradient(180deg, #1EBEC0 0%, #249EA0 100%)",
            }}
          >
            <img
              className="absolute aspect-auto w-28 md:w-auto opacity-10 mt-[-10px] ml-[-40px] md:mt-[-50px] md:ml-[-100px]"
              src={megamendung}
            />
            <div className="flex flex-col xl:flex-row gap-x-[76px] gap-y-5 z-10">
              <div className="">
                <p className="font-rubik font-semibold text-2xl md:text-5xl text-white mb-2">
                  DESTINASI
                </p>
                <p className="font-rubik font-semibold text-2xl md:text-5xl text-white">
                  WISATA
                </p>
              </div>
              <div>
                <p className="font-rubik text-sm md:text-base text-white text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="z-10">
              <Carousel content={data.map((item, key) => {
                return(
                  <Card bg={item.thumbnail} nama={item.nama} onClick={() => navigate(`/wisata/${item.path}`)} />
                )
              })} />
            </div>
            <img
              className="absolute w-28 md:w-auto opacity-10 bottom-0 right-0 mr-8 mb-5 md:mr-24 md:mb-14"
              src={megamendung2}
            />
          </div>
        </div>
      </Element>
      <Footer />
    </div>
  );
}
