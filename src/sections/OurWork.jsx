import assets from "../assets/assets";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";

const ourWorkData = [
  {
    src: assets.work_dashboard_management,
    title: "Dashboard management",
    description: "We help you execute your plan and deliver results.",
  },
  {
    src: assets.work_fitness_app,
    title: "Fitness app promotion",
    description: "We help you create a marketing strategy that drives results.",
  },
  {
    src: assets.work_mobile_app,
    title: "Mobile app marketing",
    description:
      "We turn bold ideas into powerful digital solutions that connect, engage...",
  },
];

const OurWork = () => {
  return (
    <section className="relative text-center mt-15 sm:mt-30 c-space mx-auto">
      <img
        src={assets.bgImage2}
        className="absolute -z-1 dark:hidden sm:-top-70"
      />
      <SectionHeader
        title="Our Latest Work"
        subTitle="From strategy to execution, we craft digital solutions that move your
          business forward."
        align="center"
      />
      <div className="c-space mx-auto flex flex-col gap-10 sm:grid sm:w-full sm:gap-6 sm:grid-cols-3 sm:justify-between">
        {ourWorkData.map((data, index) => (
          <div key={index} className="flex flex-col text-start gap-2">
            <motion.img
              src={data.src}
              className="w-full shadow-md rounded-lg cursor-pointer"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
            <h2 className="text-gray-700 dark:text-white">{data.title}</h2>
            <p className="text-gray-700/60 dark:text-white/70">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWork;
