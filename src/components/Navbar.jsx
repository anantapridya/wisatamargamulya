import React, { useEffect, useState } from "react";
import logomargamulya from "../assets/logo margamulya.png";
import hamburger from "../assets/hamburger.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const navigate = useNavigate()

  const bg = props.bg || "bg-white"
  const [select, setSelect] = useState(props.page);
  const [ScrollOpacity, setOpacity] = useState(0);
  const [click, setClick] = useState(false);
  const home = props.home
  const width = window.screen.availWidth;
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 500;
    const opacity = Math.min(1, scrollY / scrollThreshold);
    if (width < 768) {
      setOpacity(100);
    } else if (home === false){
      setOpacity(100)
    } else {
      setOpacity(opacity);
    }
  };
  const handleSelect = (select, link) => {
    setSelect(select)
    navigate(link)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative z-50">
      <div className={`fixed h-20 w-full justify-between ${bg} flex items-center md:hidden px-11 top-0 z-50 left-0 pt-3`}>
        <img src={logomargamulya} className="w-11 cursor-pointer" onClick={() => navigate('/')} alt="logo_margamulya" />
        <img
          src={hamburger}
          className="aspect-square w-8 md:hidden"
          onClick={() => setClick(!click)}
          alt="hamburger"
        />
      </div>
      <div
        className={`fixed h-20 w-full justify-between items-center hidden md:flex px-11 top-0 z-50 left-0 bg-[#249EA0]`}
        style={{ backgroundColor: `rgba(255, 255, 255, ${ScrollOpacity})` }}
      >
        <img src={logomargamulya} className="w-11 cursor-pointer" onClick={() => navigate('/')} alt="logo_margamulya"/>

        <div className="hidden md:flex md:items-center gap-x-8">
          <p
            className={`font-rubik font-semibold text-base border border-black rounded-full px-5 py-1 cursor-pointer ${
              select === 1 ? "text-white bg-black" : "text-black"
            }`}
            onClick={() => handleSelect(1, "/")}
          >
            BERANDA
          </p>
          {/* <p
            className={`font-rubik font-semibold text-base border border-black rounded-full px-5 py-1 cursor-pointer ${
              select === 2 ? "text-white bg-black" : "text-black"
            }`}
            onClick={() => setSelect(2)}
          >
            PROFIL DESA
          </p> */}
          <p
            className={`font-rubik font-semibold text-base border border-black rounded-full px-5 py-1 cursor-pointer ${
              select === 3 ? "text-white bg-black" : "text-black"
            }`}
            onClick={() => handleSelect(3, "/daftar/wisata")}
          >
            DESTINASI WISATA
          </p>
          {/* <p
            className={`font-rubik font-semibold text-base border border-black rounded-full px-5 py-1 cursor-pointer ${
              select === 4 ? "text-white bg-black" : "text-black"
            }`}
            onClick={() => setSelect(4)}
          >
            UMKM
          </p> */}
        </div>
      </div>
      <div
        className={`w-full bg-white fixed flex flex-col md:hidden items-center p-8 top-0 left-0 mt-20 z-10 ${
          click ? "flex" : "hidden"
        }`}
      >
        <p
          className={`font-rubik font-semibold text-sm w-full text-center py-4 ${
            select === 1 ? "text-white bg-black" : "text-black"
          }`}
          onClick={() => handleSelect(1, '/')}
        >
          BERANDA
        </p>
        {/* <p
          className={`font-rubik font-semibold text-sm w-full text-center py-4 ${
            select === 2 ? "text-white bg-black" : "text-black"
          }`}
          onClick={() => setSelect(2)}
        >
          PROFIL DESA
        </p> */}
        <p
          className={`font-rubik font-semibold text-sm w-full text-center py-4 ${
            select === 3 ? "text-white bg-black" : "text-black"
          }`}
          onClick={() => handleSelect(3, "/daftar/wisata")}
        >
          DESTINASI WISATA
        </p>
        {/* <p
          className={`font-rubik font-semibold text-sm w-full text-center py-4 ${
            select === 4 ? "text-white bg-black" : "text-black"
          }`}
          onClick={() => setSelect(4)}
        >
          UMKM
        </p> */}
      </div>
    </div>
  );
}
