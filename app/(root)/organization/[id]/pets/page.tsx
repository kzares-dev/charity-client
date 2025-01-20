import React from 'react';
import img1 from "@/public/images/cat_admin_auth.png";
import img2 from "@/public/images/dog_large_banner.jpg";
import img3 from "@/public/images/dog_create_organization.png";
import img4 from "@/public/images/pet-adoption-1.jpg"
import Image from 'next/image';



const Pets = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img1,
    img2,
    img3,
    img4,
    img1,
    img2,
    img3,
    img4,
    img1,
    img2,
    img3,
    img4
  ];

  return (
    <div className='p-5 pt-20'>
      <h1 className='text-4xl font-semibold text-gray-700'>ON ADOPTION</h1>
      <p className='max-w-lg text-gray-400 font-semibold border-b pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque tempora optio, rem ducimus adipisci ex aut obcaecati? Eaque, doloribus esse.</p>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((src, index) => (
          <div key={index} className=" max-w-[400px] float-start object-contain">
            <Image alt='' src={src} className=" w-full h-auto rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;