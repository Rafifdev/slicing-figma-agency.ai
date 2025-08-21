import Input from "../components/Input";
import SectionHeader from "../components/SectionHeader";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <section className="c-space mx-auto mt-15 sm:mt-30">
      <SectionHeader
        title={"Reach out to us"}
        subTitle={
          "From strategy to execution, we craft digital solutions that move your business forward."
        }
        align={"center"}
      />
      <div>
        <div className="grid grid-cols-2 mx-auto gap-5 max-w-2xl">
          <Input
            type="text"
            placeholder="Enter your name"
            logo={assets.person_icon}
            htmlFor={"name"}
          >
            Name
          </Input>
          <Input
            type="text"
            placeholder="Enter your email"
            logo={assets.email_icon}
            htmlFor={"name"}
          >
            Name
          </Input>
          <div className="col-span-2">
            <Input
              tag="textarea"
              placeholder="Enter your message"
              htmlFor={"name"}
            >
              Name
            </Input>
          </div>
        <motion.button
          className="hidden btn justify-center gap-2 sm:flex cursor-pointer w-32"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit <img src={assets.arrow_icon} alt="arrow right" />
        </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
