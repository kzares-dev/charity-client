import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";

interface BannerProps {
  title: string;
  text: string;
  imageUrl: StaticImageData;
  buttonText: string
}

const Banner: React.FC<BannerProps> = ({ title, text, imageUrl, buttonText }) => {
  return (
    <div className="relative overflow-hidden min-h-[500px]">
      <Image
        src={imageUrl}
        alt="banner"
        layout="fill"
        objectPosition="center"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black/25 mx-auto flex items-center px-5">
        <div className="w-full md:px-40 ">
          <h1 className="text-6xl font-bold text-white">{title}</h1>
          <p className="max-w-[60ch] text-gray-300 py-4">{text}</p>
          <Button size='lg' variant='outline'> <p className=" text-lg font-semibold"> {buttonText} </p> </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
