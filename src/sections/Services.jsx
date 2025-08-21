import assets from "../assets/assets";
import { Card } from "../components/Card";
import SectionHeader from "../components/SectionHeader";

const ServicesData = [
  {
    title: "Advertising",
    description:
      "We turn bold ideas into powerful digital solutions that connect, engage...",
    icon: "ads_icon.svg",
  },
  {
    title: "Content marketing",
    description: "We help you execute your plan and deliver results.",
    icon: "marketing_icon.svg",
  },
  {
    title: "Content writing",
    description: "We help you create a marketing strategy that drives results.",
    icon: "content_icon.svg",
  },
  {
    title: "Social media",
    description:
      "We help you build a strong social media presence and engage with your audience.",
    icon: "social_icon.svg",
  },
];

const CardItems = () => {
  return (
    <>
      {ServicesData.map((data, index) => (
        <Card key={index}>
          <div className="flex items-center text-start">
            <img
              src={`src/assets/${data.icon}`}
              alt="icon"
              className="bg-white dark:bg-dark-2 border-8 border-gray-100 dark:border-gray-600 rounded-full"
            />
            <div className="ml-8">
              <h3 className="font-bold text-gray-700 mb-3 dark:text-white">
                {data.title}
              </h3>
              <p className="text-gray-700/60 text-sm dark:text-white/70">
                {data.description}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

const Services = () => {
  return (
    <section className="relative text-center mt-15 sm:mt-30 c-space mx-auto overflow-hidden sm:overflow-visible">
      <img
        src={assets.bgImage2}
        className="absolute sm:-top-55 sm:-left-70 -z-1 dark:hidden "
      />
      <img
        src={assets.bgImage1}
        className="absolute bottom-20 -left-50 block sm:hidden -z-1 dark:hidden "
      />
      <SectionHeader
        title="How can we help?"
        subTitle="From strategy to execution, we craft digital solutions that move your
        business forward."
        align="center"
      />
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-10 px-5">
        <CardItems />
      </div>
    </section>
  );
};

export default Services;
