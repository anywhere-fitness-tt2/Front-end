import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { Slide, Fade } from '@material-ui/core';

export default function App() {
  const [slideIn, setSlideIn] = useState({
    anyone: false,
    anytime: false,
    anywhere: false,
    fitness: false,
  });

  const timeoutProp = { enter: 1000, exit: 0 };

  useEffect(() => {
    setTimeout(() => {
      setSlideIn({ anytime: true });
    }, 2000);

    setTimeout(() => {
      setSlideIn({ anytime: true, anyone: true });
    }, 4000);

    setTimeout(() => {
      setSlideIn({ anytime: true, anyone: true, anywhere: true });
    }, 6000);

    setTimeout(() => {
      setSlideIn({
        anytime: true,
        anyone: true,
        anywhere: true,
        fitness: true,
      });
    }, 8500);
  }, []);

  return (
    <Container>
      <header>Placeholder header</header>
      <TextContent>
        <h1>Health should have no boundaries</h1>
        <Slide
          direction='left'
          in={slideIn.anytime}
          appear={true}
          timeout={timeoutProp}
        >
          <h2 className='anytime'>Any time</h2>
        </Slide>
        <Slide
          direction='right'
          appear={true}
          in={slideIn.anyone}
          timeout={timeoutProp}
        >
          <h2 className='anyone'>Any one</h2>
        </Slide>
        <Slide
          direction='up'
          appear={true}
          in={slideIn.anywhere}
          timeout={timeoutProp}
        >
          <h2 className='anywhere'>
            Anywhere
            <Fade
              mountOnEnter
              unmountOnExit
              in={slideIn.fitness}
              timeout={timeoutProp}
            >
              <span>Fitness</span>
            </Fade>
          </h2>
        </Slide>
      </TextContent>
    </Container>
  );
}

const Container = styled.div`
  background-image: url('https://i.imgur.com/8FndkHz.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  font-family: ${(props) => props.theme.bodyFont};
  color: ${(props) => props.theme.yellow};
  text-align: center;

  h1 {
    background-color: black;
    padding: 15px 0;
    width: 750px;
    font-family: ${(props) => props.theme.titleFont};
    font-size: 3rem;
  }

  h2 {
    background-color: black;
    padding: 15px 0;
    width: 300px;
    max-width: 300px;
    margin: 10px;

    span {
      color: whitesmoke;
    }
  }

  .anytime {
    align-self: flex-start;
  }

  .anyone {
    align-self: flex-end;
  }

  .anywhere {
    background-color: ${(props) => props.theme.darkGray};
  }
`;
