import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useLocation, useHistory } from 'react-router-dom';

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundColor: '#FAED26',
    },
  },
  completed: {
    '& $line': {
      backgroundColor: '#FAED26',
      color: 'whitesmoke',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#9D8D8F',
    zIndex: 1,
    color: '#252629',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#FAED26',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundColor: '#FAED26',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: '1',
    2: '2',
    3: '3',
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: '#FAED26',
    color: '#252629',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps(props) {
  if(props.includes('instructor')){
    return [`Hello Instructor`, `This is`, `Your onboarding!`]
  }
  if(props.includes('client')){
    return [`Hello Client`, `This is`, `Your onboarding!`]
  }
  
}

function getStepContent(step, pathname) {
  console.log("GET STEP CONTENT: ", pathname)
  if(pathname.includes('instructor')){
    switch (step) {
      case 0:
        return 'Select instructor settings...';
      case 1:
        return 'What is an instructor anyways?';
      case 2:
        return 'This is the "INSTRUCTOR" I really care about!';
      default:
        return 'Unknown step';
    }
  }
  else if(pathname.includes('client')){
    switch (step) {
      case 0:
        return 'Select client settings...';
      case 1:
        return 'What is a client anyways?';
      case 2:
        return 'This is the "CLIENT" I really client about!';
      default:
        return 'Unknown step';
    }
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  
  const { pathname } = useLocation();
  const { push } = useHistory();
  
  //moved steps here so it can use pathname,
  //and display appropriate text depending on user/instructor.
  const steps = getSteps(pathname);

  let splicedPath = pathname.split('/');
  splicedPath.pop();
  const joinedPath = splicedPath.join('/');

  const [displayOnboard, setDisplayOnboard] = useState(true);
  const onboardSwitch = () => {
    push(joinedPath);
    setDisplayOnboard(!displayOnboard);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === steps.length - 1) {
      push(joinedPath);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div
      className={classes.root}
      style={{
        backgroundColor: '#252629',
        color: 'whitesmoke',
        zIndex: '10',
        position: 'absolute',
        top: '30vh',
      }}
    >
      <Stepper
        alternativeLabel
        style={{ backgroundColor: '#252629' }}
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography>{getStepContent(activeStep, pathname)}</Typography>
            <div
              className='buttons-line'
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant='contained'
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
              <Button
                variant='contained'
                onClick={onboardSwitch}
                className={classes.button}
              >
                Skip
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
