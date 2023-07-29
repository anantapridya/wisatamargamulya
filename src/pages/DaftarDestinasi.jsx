import React from "react";
import Navbar from "../components/Navbar";
import DaftarDestinasiCard from "../components/card/DaftarDestinasiCard";

import bg from "../assets/templatekanan.svg";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function DaftarDestinasi() {
  const navigate = useNavigate();
  window.scroll(0,0)
  
  return (
    <div>
      <div className="flex flex-col">
        <div className="bg-[#249EA0] w-full px-10 md:px-14 xl:px-[120px] z-20">
          <Navbar page={3} />
          <p className="font-indo pt-32 pb-6 text-5xl text-center md:text-left md:text-[70px] xl:text-[85px] text-white drop-shadow-2xl shadow-black">
            Destinasi Wisata
          </p>
        </div>
        <div
          className="h-full relative md:px-14 xl:px-[120px] py-10"
          style={{
            background: "linear-gradient(180deg, #1A8787 48.44%, #15AEAF 100%)",
          }}
        >
          <div className="w-full grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-4 gap-y-8">
            {data.map((item, key) => {
              return (
                <DaftarDestinasiCard
                  bg={item.thumbnail}
                  nama={item.nama}
                  onClick={() => navigate(`/wisata/${item.path}`)}
                />
              );
            })}
          </div>
          {/* <div className="w-full fixed flex justify-end"> */}
          <img src={bg} className="fixed hidden md:inline opacity-20 top-[-40px] right-40" />
          {/* </div> */}
        </div>
      </div>
      <div className="block">
        <Footer />
      </div>
    </div>
  );
}
