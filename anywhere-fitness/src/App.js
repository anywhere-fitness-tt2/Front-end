import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Slide, Fade } from '@material-ui/core';

export default function App() {
  const [slideIn, setSlideIn] = useState({
    title: false,
    anyone: false,
    anytime: false,
    anywhere: false,
  });
  const [fadeIn, setFadeIn] = useState(false);
  const { push } = useHistory();

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

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 6500);
  }, []);

  return (
    <Container>
      <TextContent>
        <Slide direction='down' in={slideIn.title} timeout={500}>
          <h1>Health should have no boundaries</h1>
        </Slide>
        <Slide direction='left' in={slideIn.anytime} timeout={700}>
          <h2 className='anytime'>Any time</h2>
        </Slide>
        <Slide direction='right' in={slideIn.anyone} timeout={700}>
          <h2 className='anyone'>Any one</h2>
        </Slide>
        <Slide direction='up' in={slideIn.anywhere} timeout={700}>
          <h2>Any where</h2>
        </Slide>
      </TextContent>
      <Buttons>
        <Fade in={fadeIn} timeout={1000}>
          <div className='button' onClick={() => push('/registration')}>
            <h3>SIGN UP</h3>
          </div>
        </Fade>
        <Fade in={fadeIn} timeout={1000}>
          <div className='button' onClick={() => push('/login')}>
            <h3>LOGIN</h3>
          </div>
        </Fade>
      </Buttons>
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
`;

const Buttons = styled.div`
  margin: 75px;
  width: 75vw;
  display: flex;
  justify-content: space-evenly;

  .button {
    width: 300px;
    height: 300px;
    background-color: ${(props) => props.theme.midGray};
    color: ${(props) => props.theme.yellow};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${(props) => props.theme.bodyFont};
    font-size: 2rem;

    &:hover {
      color: whitesmoke;
      outline: 2px solid ${(props) => props.theme.yellow};
      cursor: pointer;
    }
  }
`;
