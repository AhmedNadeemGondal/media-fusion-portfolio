import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0rem 7rem;
  color: white;
  @media (max-width: 960px) {
    display: block;
    text-align: center;
    padding: 2rem 2rem;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;

  z-index: 2;
  h2 {
    font-weight: normal;
    font-size: 3.5rem;
  }
  @media (max-width: 960px) {
    padding: 0;
    button {
      margin-bottom: 3rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
    scale: 0.8;
    margin-left: 10%;
    margin-right: 10%;
    @media (max-width: 960px) {
      margin: 0%;
      scale: 1;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
