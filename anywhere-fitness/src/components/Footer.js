//eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Fade } from '@material-ui/core';

export default function Footer() {
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
        <p>
          © Anywhere<span>Fitness</span>
        </p>
      </Fade>
    </Container>
  );
}

const Container = styled.div`
  height: 6vh;
  background-color: ${(props) => props.theme.midGray};
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.yellow};
  font-family: ${(props) => props.theme.titleFont};

  span {
    color: whitesmoke;
  }
`;
