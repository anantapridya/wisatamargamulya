import React from "react";
import website from "../assets/website.svg";
import whatsapp from "../assets/whatsapp.svg";
import instagram from "../assets/instagram.svg";

export default function Footer() {
  return (
    <div className="absolute w-full">
      <div className="bg-[#198786] w-full flex flex-col gap-y-3 items-center p-5 ">
        <p className="font-indo text-2xl md:text-3xl text-white">
          Tentang Kami
        </p>
        <div className="flex my-3 gap-x-3 md:gap-x-5">
          <div>
            <a href="https://margamulya-pangalengan.desa.id/" target="_blank">
              <img src={website} className="w-5 md:w-7" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/dmargamulya_/" target="_blank">
              <img src={instagram} className="w-5 md:w-7"/>
            </a>
          </div>
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=6285860460438"
              target="_blank"
            >
              <img src={whatsapp} className="w-5 md:w-7"/>
            </a>
          </div>
        </div>
        <p className="text-white font-rubik max-w-lg text-center text-sm md:text-base">
          Jl. Raya Pangalengan No.327, Margamulya, Kec. Pangalengan, Kabupaten
          Bandung, Jawa Barat 40378, Indonesia
        </p>
      </div>
      <div className="bg-[#249EA0] py-2">
        <p className="w-full text-center text-[10px] md:text-sm font-rubik text-white">
          Developed by Tim KKN-PPM UGM - Kisah Panorama 2023
        </p>
      </div>
    </div>
  );
}
