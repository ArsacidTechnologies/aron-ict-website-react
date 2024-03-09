import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import style from "./style.module.css";

const Features = () => {
  return (
    <>
      <section id="features" className=" py-16 md:py-20 lg:py-28">
        <div className="in-[320px]:text-center m-auto flex h-[500px] w-[65%] rounded-t-[75px] border border-b-0 border-white bg-white/10 backdrop-blur-lg max-[600px]:translate-y-[-230px] sm:translate-y-[-380px]  lg:translate-y-[-380px] lg:rounded-t-[170px]">
          <div className="flex justify-center rounded-t-[75px] border border-b-2 border-white p-[25px] text-justify lg:rounded-t-[170px]">
            <div className="container flex w-9/12 flex-col gap-[50px] ">
              <div className="py-5 pb-36 text-center text-white lg:text-2xl">
                Our Partnerships and trusted
              </div>
              {/* Todo: icons */}
              <div className="h-[50px]"></div>
              <SectionTitle
                title="ویژگی های آرون"
                paragraph="شرکت آرون پایدار یکی از پیشروان در حوزه تکنولوژی است که به عنوان یک نمونه از شرکت‌هایی که به توسعه و استفاده از فناوری‌های نوین در جهت حل مسائل محیط زیست متمرکز هستند، شناخته می‌شود. ویژگی‌های برجسته این شرکت عبارتند از:            "
                center
              />
              <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                {featuresData.map((feature) => (
                  <SingleFeature key={feature.id} feature={feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {<section id="features" className="py-16 md:py-20 lg:py-28"></section>}
    </>
  );
};

export default Features;
