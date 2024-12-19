import React from "react";
import home1 from "../img/home1.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { About, Description, Image, Hide } from "../styles";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import ScrollTop from "./ScrollTop";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography and videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          // initial="hidden"
          // animate="show"
          src={home1}
          alt="Guy with a camera"
        />
      </Image>
      <Wave />
      <ScrollTop />
    </About>
  );
};

export default AboutSection;
