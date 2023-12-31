import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Carousel from "../components/carousel/Carousel";
import MobileCarousel from "../components/carousel/MobileCarousel";
import data from "../data/data.json";
import Card from "../components/card/Card";
import megamendung from "../assets/megamendung.svg";
import ModalCarousel from "../components/carousel/ModalCarousel";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DetailWisata() {
  const { path } = useParams();
  const navigate = useNavigate();
  const foundItem = data.find((item) => item.path === path);
  window.scroll(0, 0);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  AOS.refresh();

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1500,
    });
  }, []);
  return (
    <div className="w-full ">
      <div>
        <Navbar home={false} page={3} />
      </div>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-[1000px]">
            {/* <p>GALLERY</p> */}
            <ModalCarousel
              content={foundItem.foto.map((item, key) => {
                return (
                  <div className="w-[1000px] flex justify-center items-center">
                    <div className="flex justify-center w-full">
                      {/* <div
                          className="w-[800px] h-[500px] "
                        > */}
                      <img
                        src={item}
                        className="max-h-[500px] max-w-[800px] rounded-3xl"
                        alt={item}
                      />
                      {/* </div> */}
                    </div>
                  </div>
                );
              })}
            />
          </div>
        </Box>
      </Modal>
      {/* END of Modal */}

      <div className="py-20 px-10 md:py-20 md:px-20 xl:px-36 w-full">
        <div className="mt-5">
          <Link
            className="font-rubik text-lg md:text-2xl"
            onClick={() => navigate(-1)}
          >
            &lt; Back
          </Link>
        </div>
        <div className="my-3 title-container relative">
          <img
            src={megamendung}
            className="absolute -z-10 opacity-[0.05] ml-[-80px] mt-6"
            alt="megamendung"
          />
          <p
            className="font-semibold text-[#249EA0] max-w-[700px] leading-9 md:leading-[60px] font-rubik text-[40px] md:text-[60px]"
            data-aos="fade-left"
          >
            {foundItem.nama}
          </p>
          {/* <p className="text-left w-full font-rubik text-3xl text-[#B3B3B3] mt-5">
            Wisata Alam
          </p> */}
        </div>
        <p
          className="font-rubik text-lg md:text-2xl text-justify"
          data-aos="zoom-in"
        >
          {foundItem.deskripsi}
        </p>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <div className="md:hidden my-5">
          <MobileCarousel
            content={foundItem.foto.map((item, key) => {
              return (
                <div className="w-full">
                  <div className="flex justify-center items-center">
                    <img
                      src={item}
                      className="max-h-[180px]"
                      alt="megamendung"
                    />
                  </div>
                </div>
              );
            })}
          />
        </div>
        <div className="w-full my-9 hidden md:grid grid-cols-2 grid-rows-2 h-[800px] gap-x-3 gap-y-3">
          <div
            className="col-span-2 bg-black rounded-3xl bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${foundItem.foto[0]})` }}
            onClick={handleOpen}
            data-aos="fade-down"
          ></div>
          <div
            className="bg-black rounded-3xl bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${foundItem.foto[1]})` }}
            onClick={handleOpen}
            data-aos="fade-right"
          ></div>
          <div
            className="bg-black rounded-3xl bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${foundItem.foto[2]})` }}
            onClick={handleOpen}
            data-aos="fade-left"
          ></div>
        </div>
        <div className="">
          <p className="font-rubik text-lg md:text-2xl text-justify" data-aos="zoom-in">
            {foundItem.fasilitas}
          </p>
        </div>
      </div>
      <div
        className="mt-10 md:mt-28 w-full p-10"
        style={{
          borderRadius: "50px 50px 0px 0px",
          background: "linear-gradient(180deg, #1EBEC0 0%, #249EA0 100%)",
        }}
      >
        <div className="mb-10">
          <p className="text-center text-white font-indo text-3xl md:text-4xl font-bold " data-aos="zoom-in">
            Destinasi Lainnya
          </p>
        </div>
        <div className="px-10 md:px-20" data-aos="fade-up">
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
