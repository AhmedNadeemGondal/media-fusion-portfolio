import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from "../MovieState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname;
  console.log(url);

  const [movies, setMovies] = useState(MovieState);

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                desc={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="second_image" />
          </ImageDisplay>
          <ScrollTop />
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 3rem;
    font-weight: 400;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -70%);
  }
  img {
    /* width: 100%; */
    height: 70vh;
    transform: translate(0%, -5%);
    /* object-fit: cover; */
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 960px) {
    margin: 5rem 3rem;
  }
`;

const AwardStyled = styled.div`
  padding: 2rem;
  h3 {
    font-size: 1.5rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    /* width: 100%; */
    height: 100vh;
    object-fit: cover;
  }
`;

const Award = ({ title, desc }) => {
  return (
    <AwardStyled>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{desc}</p>
    </AwardStyled>
  );
};

export default MovieDetail;
