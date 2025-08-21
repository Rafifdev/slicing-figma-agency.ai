import SectionHeader from "../components/SectionHeader";
import { teamData } from "../assets/assets";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <section className="c-space mx-auto mt-15 sm:mt-30">
      <SectionHeader
        title={"Meet the team"}
        subTitle={
          "A passionate team of digital experts dedicated to your brands success."
        }
        align={"center"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-sm:flex-col">
        {teamData.map((data, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row items-center border border-gray-100 px-3 py-3.5 rounded-lg shadow-xl shadow-gray-100 dark:shadow-none dark:bg-dark-2 dark:border-gray-600 w-full cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{duration: 0.3}}
          >
            <img
              src={data.image}
              alt={data.name}
              className="rounded-full w-12 mb-3 sm:mb-0"
            />
            <div className="flex flex-col ml-4 gap-1">
              <p className="text-sm font-bold dark:text-white">{data.name}</p>
              <p className="text-xs opacity-60 dark:text-white">{data.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
