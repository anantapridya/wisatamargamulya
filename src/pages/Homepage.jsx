import React, { useEffect } from "react";
import thumbnail from "../assets/thumbnail.jpg";
import template from "../assets/template1.svg";
import templatekiri from "../assets/templatekiri.svg";
import templatekanan from "../assets/templatekanan.svg";
import megamendung from "../assets/megamendung.svg";
import megamendung2 from "../assets/megamendung2.svg";
import margamulya from "../assets/margamulya.svg";
import data from "../data/data.json";

import Navbar from "../components/Navbar";
import { Element, Link } from "react-scroll";
import Card from "../components/card/Card";
import Carousel from "../components/carousel/Carousel";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Homepage() {
  window.scroll(0, 0);
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1500,
    });
    AOS.refresh();
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="w-full h-[100vh] bg-cover bg-center flex flex-col items-center justify-center relative bg-fixed"
        style={{ backgroundImage: `url(${thumbnail})` }}
      >
        <Navbar page={1} />
        <div className="flex flex-col items-center">
          <p
            className="font-rubik font-bold text-3xl sm:text-[40px] md:text-[75px] lg:text-[84px] text-white pl-[25px] md:pl-14"
            data-aos="fade-up"
          >
            EXPLORE
          </p>
          <p
            className="font-indo font-normal text-[50px] sm:text-[114px] md:text-[130px] lg:text-[160px] text-oren mt-[-15px] md:mt-[-30px]"
            data-aos="fade-up"
          >
            Margamulya
          </p>
          <p
            className="font-rubik md:text-2xl text-center font-medium text-white bg-gray-100 mx-6 backdrop-blur-sm bg-opacity-20 px-4 md:px-11 py-2 rounded-3xl md:mt-[-20px]"
            data-aos="zoom-in"
          >
            Kecamatan Pangalengan, Bandung Selatan
          </p>
        </div>
        <div
          className="absolute w-full bottom-[-10px] h-[175px] bg-cover bg-center flex items-center justify-center "
          style={{ backgroundImage: `url(${template})` }}
        >
          <Link to="main" smooth={true} duration={1000}>
            <div className="aspect-square w-20 cursor-pointer "></div>
          </Link>
        </div>
      </div>

      {/* Shadoww */}

      <Element name="main">
        <div className="md:h-[100vh] w-full py-20 px-11 mt-[-10px]">
          <div className="flex flex-col h-full items-center relative justify-center gap-y-11">
            <img
              src={templatekiri}
              className=" md:absolute hidden md:inline left-[100px] bottom-[-400px] -z-10"
              alt="templpate"
            />
            <p
              className="font-rubik font-semibold text-3xl md:text-5xl text-center text-oren"
              data-aos="fade-up"
            >
              MENGENAL LEBIH DEKAT
            </p>
            <div
              className="flex flex-col gap-y-5 xl:grid xl:grid-cols-2 justify-center items-center xl:w-[1050px] rounded-3xl px-[40px] py-[30px] xl:py-[70px] xl:px-[60px]"
              style={{
                background: "linear-gradient(180deg, #F9C828 0%, #F7971F 100%)",
              }}
            >
              <div className="aspect-square w-[200px] md:w-[400px] flex items-center rounded-3xl">
                <img src={margamulya} alt="margamulya" data-aos="fade-right" />
              </div>
              <div>
                <p
                  className="font-indo text-[40px] text-center xl:text-left md:text-[82px] text-white"
                  data-aos="zoom-in"
                >
                  Margamulya
                </p>
                <p
                  className="font-rubik text-white text-justify text-base md:text-lg"
                  data-aos="zoom-in"
                >
                  Margamulya merupakan sebuah desa yang terletak di Kecamatan
                  Pangalengan, Kabupaten Bandung, Jawa Barat. Desa ini memiliki
                  luas wilayah 1.294,14 Ha dengan total penduduk 18 ribu jiwa.
                </p>
              </div>
            </div>
            <img
              src={templatekanan}
              className="absolute hidden md:inline right-[100px] bottom-[-400px] -z-10"
              alt="template"
            />
          </div>
        </div>
        <div className=" ">
          <div
            className="py-10 px-14 md:py-24 md:px-40 flex flex-col gap-y-14 mt-[150px] relative"
            style={{
              borderRadius: "50px 50px 0px 0px",
              background: "linear-gradient(180deg, #1EBEC0 0%, #249EA0 100%)",
            }}
          >
            <img
              className="absolute aspect-auto w-28 md:w-auto opacity-10 mt-[-10px] ml-[-40px] md:mt-[-50px] md:ml-[-100px]"
              src={megamendung}
              alt="megamendung"
            />
            <div className="flex flex-col xl:flex-row gap-x-[76px] gap-y-5 z-10">
              <div className="" data-aos="fade-right">
                <p className="font-rubik font-semibold text-2xl md:text-5xl text-white mb-2">
                  DESTINASI
                </p>
                <p className="font-rubik font-semibold text-2xl md:text-5xl text-white">
                  WISATA
                </p>
              </div>
              <div>
                <p
                  className="font-rubik text-sm md:text-base text-white text-justify"
                  data-aos="zoom-in"
                >
                  Margamulya, sebuah surga tersembunyi, menawarkan potensi wisata yang sungguh memukau. Di sinilah Anda akan menemukan destinasi wisata dengan pesona yang tiada tanding. Dikelilingi oleh keindahan alam yang menakjubkan, desa ini juga menyambut setiap pengunjung dengan keramahan dan kehangatan yang tak terlupakan. Tak ada tempat yang lebih sempurna untuk melepas penat dari hiruk pikuk perkotaan daripada di desa yang menakjubkan ini.
                </p>
              </div>
            </div>
            <div className="z-10" data-aos="fade-up">
              <Carousel
                content={data.map((item, key) => {
                  return (
                    <Card
                      bg={item.thumbnail}
                      nama={item.nama}
                      onClick={() => navigate(`/wisata/${item.path}`)}
                    />
                  );
                })}
              />
            </div>
            <img
              className="absolute w-28 md:w-auto opacity-10 bottom-0 right-0 mr-8 mb-5 md:mr-24 md:mb-14"
              src={megamendung2}
              alt="megamendung"
            />
          </div>
        </div>
      </Element>
      <Footer />
    </div>
  );
}
