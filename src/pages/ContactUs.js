import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title style={{ fontWeight: 600, fontSize: "3rem" }}>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in Touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <a
              href="https://wa.me/03335581734"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIcon icon={faWhatsapp} />
            </a>
            <h2>Send us a message.</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <a
              href="ahmednadeemgondal92@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIcon icon={faEnvelope} />
            </a>
            <h2>Send an email.</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <a
              href="https://www.linkedin.com/in/ahmed-nadeem-7a30a4111/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIcon icon={faLinkedin} />
            </a>
            <h2>Social Media.</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};
const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 960px) {
    padding: 3rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 960px) {
    margin-top: 3rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: white;
  width: 4rem;
  height: 4rem;
  color: #353535;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    font-size: 2rem;
    font-weight: 500;
  }
`;

export default ContactUs;
