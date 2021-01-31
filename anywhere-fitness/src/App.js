import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Slide } from '@material-ui/core';

export default function App() {
  const [slideIn, setSlideIn] = useState({
    title: false,
    anyone: false,
    anytime: false,
    anywhere: false,
  });
  const timeoutProp = { enter: 700, exit: 0 };

  useEffect(() => {
    setTimeout(() => {
      setSlideIn({ title: true });
      setTimeout(() => {
        setSlideIn({ title: true, anytime: true });
        setTimeout(() => {
          setSlideIn({ title: true, anytime: true, anyone: true });
          setTimeout(() => {
            setSlideIn({
              title: true,
              anytime: true,
              anyone: true,
              anywhere: true,
            });
          }, 1500);
        }, 1500);
      }, 1500);
    }, 1000);
  }, []);

  return (
    <Container>
      <TextContent>
        <Slide direction='down' in={slideIn.title} timeout={500}>
          <h1>Health should have no boundaries</h1>
        </Slide>
        <Slide direction='left' in={slideIn.anytime} timeout={timeoutProp}>
          <h2 className='anytime'>Any time</h2>
        </Slide>
        <Slide direction='right' in={slideIn.anyone} timeout={timeoutProp}>
          <h2 className='anyone'>Any one</h2>
        </Slide>
        <Slide direction='up' in={slideIn.anywhere} timeout={timeoutProp}>
          <h2 className='anywhere'>Any where</h2>
        </Slide>
      </TextContent>
    </Container>
  );
}

const Container = styled.div`
  background-image: url('https://i.imgur.com/8FndkHz.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 94vh;
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
    background-color: ${(props) => props.theme.midGray};
    padding: 15px 0;
    width: 900px;
    font-family: ${(props) => props.theme.titleFont};
    font-size: 3rem;
  }

  h2 {
    background-color: ${(props) => props.theme.midGray};
    padding: 15px 0;
    width: 300px;
    max-width: 300px;
    margin: 10px;
  }

  .anytime {
    align-self: flex-start;
  }

  .anyone {
    align-self: flex-end;
  }

  .anywhere {
    background-color: ${(props) => props.theme.midGray};
  }
`;
