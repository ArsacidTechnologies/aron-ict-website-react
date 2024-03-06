import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import style from "./style.module.css";

const Features = () => {
  return (
    <section id="features" className=" py-16 md:py-20 lg:py-28">
      <div className={`bg-white/10 backdrop-blur-lg m-auto border border-white border-b-0 lg:rounded-t-[150px] rounded-t-[75px] flex translate-y-[-50%]  h-[500px] w-[65%]`}>
        <div className="flex justify-center text-justify border border-white border-b-0 p-[25px] lg:rounded-t-[150px] rounded-t-[75px]">
          <span className="w-9/12 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae soluta tenetur sint? Ipsam reiciendis soluta reprehenderit quod aliquam culpa tenetur. Tempora odio consectetur mollitia voluptatibus voluptate in, corporis aperiam quibusdam!</span></div>
      </div>
    </section>
    // {/* <section id="features" className="py-16 md:py-20 lg:py-28">
    //         <div className="container">
    //           <SectionTitle
    //             title="ویژگی های آرون"
    //             paragraph="شرکت آرون پایدار یکی از پیشروان در حوزه تکنولوژی است که به عنوان یک نمونه از شرکت‌هایی که به توسعه و استفاده از فناوری‌های نوین در جهت حل مسائل محیط زیست متمرکز هستند، شناخته می‌شود. ویژگی‌های برجسته این شرکت عبارتند از:            "
    //             center
    //           />

    //           <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
    //             {featuresData.map((feature) => (
    //               <SingleFeature key={feature.id} feature={feature} />
    //             ))}
    //           </div>
    //         </div>
    //       </section> */}
  );
};

export default Features;
