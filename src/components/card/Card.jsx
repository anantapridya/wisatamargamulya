import React, { useState } from "react";

export default function Card(props) {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex justify-center w-full">
      <div
        className="w-[200px] h-[300px] md:w-[330px] md:h-[495px] bg-black rounded-3xl md:rounded-[40px] bg-cover bg-center cursor-pointer"
        style={{ backgroundImage: `url(${props.bg})` }}
        onClick={props.onClick}
      >
        <div className="w-full h-full bg-black bg-opacity-30 rounded-3xl md:rounded-[40px]">
          <div
            className="w-full h-full rounded-3xl md:rounded-[40px] flex justify-center items-end pb-3 px-2 card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="flex items-center justify-center w-full h-[100px]">
              <p
                className={`font-rubik text-[30px] font-bold text-center text-white  ${
                  hover ? "opacity-100" : "opacity-0"
                }`}
              >
                {props.nama}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
