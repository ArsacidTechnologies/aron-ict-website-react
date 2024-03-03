import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";




const Hero = () => {
  return (
    <>


      <section
        id="home"
        className="flex bg-blue-700 items-center justify-center relative top-0 left-0  h-[80vh]"
      >

        <div className=" flex flex-col gap-[10px] items-center justify-center container w-full bg-red-600 h-[200px]">
          <h1 className="text-2xl">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
          <h3>لورم ایپسوم متن ساختگی با تولید </h3>
          <Link href='/about' className="border rounded-full  px-4 flex items-center">
            <FaArrowRightLong className="cursor-pointer" />
            <p className="mr-2" >بیشتر بدانید</p>
          </Link>
        </div>

      </section >
    </>
  );
};

export default Hero;
