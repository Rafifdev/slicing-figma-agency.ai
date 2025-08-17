import assets from "../assets/assets";

const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-10 sm:py-20 c-space max-w-7xl mt-16">
      <div className="flex items-center gap-2 hover-animation rounded-full font-medium p-1.5 text-sm pr-4 border border-gray-300">
        <img src={assets.group_profile} alt="people" className="w-20" />
        <p className="text-xs font-medium dark:text-white text-gray-600">
          Trusted by 10k+ people
        </p>
      </div>
      <h1 className="text-6xl sm:text-5xl md:text-[84px] text-center font-bold max-w-5xl md:leading-25 text-gray-700 dark:text-white mt-5 sm:mt-0">
        Turning imagination into{" "}
        <span className="text-primary dark:text-blue-600">digital</span> impact.
      </h1>
      <p className="text-center mt-5 sm:mt-0 md:text-lg md:max-w-2/4 text-gray-700 sm:text-gray-500 dark:text-white/70">
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </p>
      <img
        src={assets.hero_img}
        alt="hero image"
        className="w-[1100px] mt-5 sm:mt-10 hover-animation bg-transparent rounded-[45px] shadow-lg"
      />
    </section>
  );
};

export default Hero;
