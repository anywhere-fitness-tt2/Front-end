import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Fade } from '@material-ui/core';

import { logout } from '../actions/index';

function Header(props) {
  const [fadeIn, setFadeIn] = useState(false);
  const location = useLocation();
  const { push } = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 5300);
  }, []);

  const profileClickHandler = () => {
    localStorage.getItem('token') && props.user.role === 'instructor'
      ? push(`/instructor-profile/${props.user.userId}`)
      : push(`/client-profile/${props.user.userId}`);
  };

  const logOutHandler = () => {
    props.logout();
    push('/');
  };

  const inSetting = location.pathname === '/' ? fadeIn : true;
  const timeoutSetting = location.pathname === '/' ? 1000 : 0;

  return (
    <Container>
      <Fade in={inSetting} timeout={timeoutSetting}>
        <div onClick={() => push('/')} className='logo'>
          <h1>
            Anywhere<span>Fitness</span>
          </h1>
        </div>
      </Fade>
      {localStorage.getItem('token') ? (
        <div className='buttons'>
          <Fade in={inSetting} timeout={timeoutSetting}>
            <button onClick={profileClickHandler}>Profile</button>
          </Fade>
          <Fade in={inSetting} timeout={timeoutSetting}>
            <button onClick={logOutHandler}>Logout</button>
          </Fade>
        </div>
      ) : (
        <div className='buttons'>
          <Fade in={inSetting} timeout={timeoutSetting}>
            <button onClick={() => push('/registration')}>Sign up</button>
          </Fade>
          <Fade in={inSetting} timeout={timeoutSetting}>
            <button onClick={() => push('/login')}>Login</button>
          </Fade>
        </div>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loginReducer.loggedIn,
    user: state.loginReducer.user,
  };
};

export default connect(mapStateToProps, { logout })(Header);

const Container = styled.div`
  height: 6vh;
  background-color: ${(props) => props.theme.midGray};
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    cursor: pointer;
  }

  h1 {
    margin: 0 30px;
    font-family: ${(props) => props.theme.titleFont};
    color: ${(props) => props.theme.yellow};

    span {
      color: whitesmoke;
    }
  }

  .buttons {
    margin: 0 30px;
  }

  button {
    margin: 10px;
    padding: 5px;
    width: 80px;
    font-family: ${(props) => props.theme.bodyFont};
    border: 1px solid ${(props) => props.theme.yellow};
    background-color: ${(props) => props.theme.midGray};
    color: whitesmoke;

    &:hover {
      background-color: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.midGray};
    }
  }
`;
