import React from 'react'
import {motion} from "framer-motion";
import mr from "../../assests/Founderimg.png";

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={mr} alt="Founder" height={200} width={200} />
        <h3>Madhul Raj</h3>

        <p>
          Hey, Everyone I am Madhul Raj, the founder of NIT Burger Wala.
          <br />
          Our aim is to create the most tasty burger on planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;