
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
    <section id="contact" className="container shadow-white-500/50 backdrop-blur-sm bg-white rounded-[5px] border overflow-hidden py-16 md:py-20 lg:py-10 lg:mb-12  flex">
      <form className="form  w-[50%] h-[400px] flex flex-col justify-between border rounded-[8px] p-5">
        <input type="text" placeholder="نام" className=" border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" />
        <input type="email" placeholder="پست الکترونیک" className="p-2 placeholder-gray-400  outline-none rounded-sm  border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" />
        <div className="text-message w-full h-[200px]">
          <textarea className="resize-none  p-2 placeholder-gray-400  outline-none rounded-sm w-full h-full border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none " placeholder="پیام" ></textarea>
        </div>
        <button className=" border p-2 outline-none bg-[#3B82F6] text-white">ارسال پیام</button>
      </form>
      <div className="contactdetails flex flex-col w-[50%]  px-7">
        <p className="mb-2 leading-9 text-3xl text-opacity-100">اطلاعات تماس</p>

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
