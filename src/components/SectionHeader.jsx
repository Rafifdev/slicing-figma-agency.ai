const SectionHeader = ({ title, subTitle, align }) => {
  return (
    <div className={`text-${align} sm:mb-15 mb-10`}>
      <h2
        className={`text-gray-700 text-4xl sm:text-5xl dark:text-white`}
      >
        {title}
      </h2>
      <p
        className={`mt-10 sm:font-normal max-w-lg px-2 sm:px-0 text-center mx-auto text-gray-500 dark:text-white/70`}
      >
        {subTitle}
      </p>
    </div>
  );
};

export default SectionHeader;
