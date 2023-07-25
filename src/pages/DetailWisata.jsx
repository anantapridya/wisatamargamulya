import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import MobileCarousel from "../components/MobileCarousel";
import data from "../data/data.json";
import Card from "../components/card/Card";
import megamendung from "../assets/megamendung.svg";
import Map from "../components/Map";
import Modal from "../components/Modal";

export default function DetailWisata() {
  const { path } = useParams();
  const navigate = useNavigate();
  const foundItem = data.find((item) => item.path === path);
  console.log(foundItem);
  window.scroll(0, 0);
  return (
    <div className="w-full ">
      <Navbar home={false} />
      {/* Modal */}
      <div className="hidden" >
        <Modal />
      </div>
      {/* END of Modal */}
      <div className="py-10 px-10 md:py-20 md:px-36 w-full">
        <div className="mt-5">
          <Link className="font-rubik text-2xl" onClick={() => navigate(-1)}>
            &lt; Back
          </Link>
        </div>
        <div className="my-3 title-container relative">
          <img
            src={megamendung}
            className="absolute -z-10 opacity-[0.05] ml-[-80px] mt-6"
          />
          <p className="font-semibold text-[#249EA0] max-w-[700px] leading-[60px] font-rubik text-[60px]">
            {foundItem.nama}
          </p>
          <p className="text-left w-full font-rubik text-3xl text-[#B3B3B3] mt-5">
            Wisata Alam
          </p>
        </div>
        <p className="font-rubik text-2xl text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="md:hidden">
          <MobileCarousel />
        </div>
        <div className="w-full mt-9 grid grid-cols-3 grid-rows-2 h-[600px] gap-x-3 gap-y-3">
          <div className="col-span-1 row-span-2 rounded-3xl bg-black">
            {/* <Map position={[51.505, -0.09]} /> */}
          </div>
          <div
            className="col-span-2 bg-black rounded-3xl bg-cover bg-center"
            style={{ backgroundImage: `url(${foundItem.foto[0]})` }}
          ></div>
          <div
            className="bg-black rounded-3xl bg-cover bg-center"
            style={{ backgroundImage: `url(${foundItem.foto[1]})` }}
          ></div>
          <div
            className="bg-black rounded-3xl bg-cover bg-center"
            style={{ backgroundImage: `url(${foundItem.foto[2]})` }}
          ></div>
        </div>
        {/* <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-x-3 gap-y-3 mt-5">
          <div
            className="bg-black w-full rounded-3xl h-[300px] col-span-2 bg-cover bg-center"
            style={{ backgroundImage: `url(${foundItem.foto[0]})` }}
          ></div>
          <div
            className="bg-black w-full rounded-3xl h-[300px] bg-cover bg-center"
            style={{ backgroundImage: `url(${foundItem.foto[1]})` }}
          ></div>
          <div
            className="bg-black w-full rounded-3xl h-[300px] bg-cover bg-center"
            style={{ backgroundImage: `url(${foundItem.foto[2]})` }}
          ></div>
          <div
            className="bg-black w-full rounded-3xl h-[300px] col-span-2 bg-cover bg-center"
            style={{ backgroundImage: `url(${foundItem.foto[3]})` }}
          ></div>
        </div> */}
      </div>
      <div
        className="mt-28 w-full p-10"
        style={{
          borderRadius: "50px 50px 0px 0px",
          background: "linear-gradient(180deg, #1EBEC0 0%, #249EA0 100%)",
        }}
      >
        <p className="text-center text-white font-indo text-4xl font-bold mb-10">
          Destinasi Lainnya
        </p>
        <div className="px-10 md:px-20">
          <Carousel
            content={data.map((item, key) => {
              if (foundItem.id !== item.id) {
                return (
                  <Card
                    bg={item.thumbnail}
                    nama={item.nama}
                    onClick={() => navigate(`/wisata/${item.path}`)}
                  />
                );
              }
            })}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
