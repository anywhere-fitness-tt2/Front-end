import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Fade } from '@material-ui/core';

export default function Header() {
  const [fadeIn, setFadeIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 5300);
  }, []);

  return (
    <Container>
      <Fade
        in={location.pathname === '/' ? fadeIn : true}
        timeout={location.pathname === '/' ? 1000 : 0}
      >
        <h1>
          Anywhere<span>Fitness</span>
        </h1>
      </Fade>
      <Fade
        in={location.pathname === '/' ? fadeIn : true}
        timeout={location.pathname === '/' ? 1000 : 0}
      >
        <button>Buttons will go here</button>
      </Fade>
    </Container>
  );
}

const Container = styled.div`
  height: 6vh;
  background-color: ${(props) => props.theme.midGray};
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0 15px;
    font-family: ${(props) => props.theme.titleFont};
    color: ${(props) => props.theme.yellow};

    span {
      color: whitesmoke;
    }
  }

  button {
    margin: 0 15px;
  }
`;
