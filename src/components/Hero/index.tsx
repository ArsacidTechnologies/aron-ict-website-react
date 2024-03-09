"use client";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import style from "./style.module.css";
import Script from "next/script";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative left-0 top-0 flex h-[80vh] flex-col items-center  justify-center"
      >
        <Script src="./script.js"></Script>

        <canvas id="bubble" className={` canvas ${style.background}`}></canvas>
        <div className=" container flex h-[200px] w-full flex-col items-center justify-center  gap-[25px] text-white">
          <h1 className="text-center text-4xl">هدایت شده توسط فناوری،</h1>
          <h3 className="text-5xl"> توانمند شده توسط شما</h3>
          <Link
            href="/about"
            className="flex items-center  rounded-full border px-8 py-2"
          >
            <FaArrowRightLong className="cursor-pointer" />
            <p className="mr-2">بیشتر بدانید</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
