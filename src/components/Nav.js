import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/media-fusion-portfolio">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/media-fusion-portfolio">1. About Us</Link>
          <Line
            transition={{ duration: 0.7 }}
            initial={{ width: "0%" }}
            animate={{
              width: pathname === "/media-fusion-portfolio" ? "50%" : "0%",
            }}
          />
        </li>
        <li>
          <Link to="/media-fusion-portfolio/work">2. Our Work</Link>
          <Line
            transition={{ duration: 0.7 }}
            initial={{ width: "0%" }}
            animate={{
              width: pathname === "/media-fusion-portfolio/work" ? "50%" : "0%",
            }}
          />
        </li>
        <li>
          <Link to="/media-fusion-portfolio/contact">3. Contact Us</Link>
          <Line
            transition={{ duration: 0.7 }}
            initial={{ width: "0%" }}
            animate={{
              width:
                pathname === "/media-fusion-portfolio/contact" ? "50%" : "0%",
            }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 1rem 0rem 0rem 0rem;
    ul {
      padding: 0rem 2rem 1rem 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0rem;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -40%;
  left: 58%;
  @media (max-width: 960px) {
    left: 25%;
  }
`;
export default Nav;
