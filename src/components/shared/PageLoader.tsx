// components/Loader.tsx
import Image from "next/image";
import React from "react";

const PageLoader = () => {
  return (
    <div className="w-screen text-white bg-[#1D1B26] h-screen z-[999] fixed flex flex-col items-center justify-center">
      <Image
        src="/assets/icons/icongunny_100.webp"
        alt="Gunny logo"
        width={200}
        height={200}
        className="hidden object-contain animate-bounce lg:block"
      />
      <Image
        src="/assets/icons/icongunny_100.webp"
        alt="Gunny logo"
        width={100}
        height={100}
        className="object-contain animate-bounce lg:hidden"
      />
      <h1 className="text-white animate-pulse font-valorant text-[40px] bg-fuzzy-backgroundColor bg-clip-text">
        Loading...
      </h1>
    </div>
  );
};

export default PageLoader;
