
import NewsLatterBox from "./NewsLatterBox";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { LiaAddressBookSolid } from "react-icons/lia";
import Map from "../MapComponent/MapComponent"


const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // ذخیره شده در فایل .env.local
const mapCenter = { lat: -34.397, lng: 150.644 };
const mapZoom = 8;

const Contact = () => {
  return (
    <section id="contact" className="container backdrop-blur-sm bg-cyan-950 rounded-[5px] border overflow-hidden py-16 md:py-20 lg:py-10 lg:mb-12  flex">
      <form className="form  w-[50%] h-[400px] flex flex-col justify-between border rounded-[8px] p-5">
        <input type="text" placeholder="نام" className="p-2 text-white placeholder-white outline-none rounded-sm" />
        <input type="email" placeholder="پست الکترونیک" className="p-2 placeholder-white  outline-none rounded-sm text-white" />
        <div className="text-message w-full h-[200px]">
          <textarea className="resize-none text-white p-2 placeholder-white  outline-none rounded-sm w-full h-full " placeholder="پیام" ></textarea>
        </div>
        <button className=" border p-2 outline-none">ارسال پیام</button>
      </form>
      <div className="contactdetails flex flex-col w-[50%]  px-7">
        <p className="mb-2 font-bold">اطلاعات تماس</p>

        <div className="flex items-center my-2">  <MdOutlineMarkEmailRead /><span className="mx-2">aron.ict@gmail.com</span></div>
        <div className="flex items-center ">  <FaPhone /> <span className="mx-2">+2177218737</span></div>
        <div className="flex items-center mb-5"> <LiaAddressBookSolid /> <span className="mx-2">تهران، میدان انقلاب، خیابان وصال شیرازی</span></div>
        <div className=" h-[260px]">
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Contact;
