import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
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
      </section>
    </>
  );
};

export default Features;
