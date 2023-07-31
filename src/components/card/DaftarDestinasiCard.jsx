import React from 'react'

export default function DaftarDestinasiCard(props) {
  return (
    <div className='aspect-square w-[200px] md:w-[250px] xl:w-[300px] bg-black rounded-[32px] bg-center bg-cover z-10 cursor-pointer' style={{backgroundImage: `url(${props.bg})`}}>
        <div className='bg-black w-full h-full rounded-[32px] bg-opacity-60 flex justify-center items-center px-8' onClick={props.onClick}>
            <p className='font-rubik text-white text-xl md:text-3xl xl:text-[40px] text-center font-semibold md:leading-[45px]'>{props.nama}</p>
        </div>
    </div>
  )
}
