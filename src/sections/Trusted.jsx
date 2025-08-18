import { twMerge } from "tailwind-merge";
import { Marquee } from "../components/Marquee";
import { company_logos } from "../assets/assets";

const firstRow = company_logos;

const ReviewCard = ({ logo }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl p-2 flex items-center justify-center hover-animation",
        // light styles
        " hover:bg-gray-950/[.05]",
        // dark styles
        " dark:hover:bg-gray-50/[.15] dark:text-white"
      )}
    >
      <img src={logo} alt="company logo" className="w-40"/>
    </figure>
  );
};

export default function Trusted() {
  return (
    <section className="c-space">
    <p className="text-center my-5 sm:my-10 text-gray-600 dark:text-white">Trusted by Leading Companies</p>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {company_logos.map((logo, index) => (
            <ReviewCard key={index} logo={logo} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-white dark:from-dark"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-white dark:from-dark"></div>
      </div>
    </section>
  );
}
