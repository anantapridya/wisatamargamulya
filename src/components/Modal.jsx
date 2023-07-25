import React, { useState } from 'react'
import MobileCarousel from "../components/MobileCarousel"

export default function Modal() {
  const [show, setShow] = useState(true)
  return (
    <div className={`fixed w-full h-full flex items-center justify-center z-50 ${show ? "block": "hidden"}`} style={{background: "rgba(255, 255, 255, 0.40)",
      backdropFilter: "blur(5px)"}}>
        <div className='w-[600px]' onBlur={() => console.log("test")}>
          <MobileCarousel />
        </div>
    </div>
  )
}
