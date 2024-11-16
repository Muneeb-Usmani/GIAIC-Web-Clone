import Image from "next/image";
import React from "react";
import img1 from "../../public/image1.jpg"
import img2 from "../../public/image2.jpg"
import img3 from "../../public/image3.jpg"
import img4 from "../../public/image4.jpg"
import img5 from "../../public/image5.jpg"

const Cards = () => {
  return (
    <>
      <div className="flex flex-col justify-around gap-8">
        <div className="flex gap-2 mx-5">
          <div className="basis-1/2">
            <Image src={img4} width={800} height={800} alt="Logo of the website" className="w-full h-full rounded-lg"/>
          </div>
          <div className="basis-1/2">
            <Image src={img5} width={800} height={800} alt="Logo of the website" className="w-full h-full rounded-lg"/>
          </div>
        </div>
        <div className="flex gap-3 mx-5">
          <div className="basis-4/12">
            <Image src={img1} width={500} height={500} alt="Logo of the website" className="w-full h-4/5 rounded-lg shadow-black shadow-xl shadow-foreground"/>
          </div>
          <div className="basis-4/12">
            <Image src={img2} width={500} height={500} alt="Logo of the website" className="w-full h-4/5 rounded-lg shadow-black shadow-xl shadow-foreground" />
          </div>
          <div className="basis-4/12">
            <Image src={img3} width={500} height={500} alt="Logo of the website" className="w-full h-4/5 rounded-lg shadow-black shadow-xl shadow-foreground" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
