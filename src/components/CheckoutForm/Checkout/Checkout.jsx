import React, {useState} from 'react';
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core'
import useStyles from './Styles'
const steps = ['Shipping address', 'Payment details']

function Checkout(props) {
    const classes = useStyles()
    const[activeStep, setStep] = useState(0)
    return (
        <>
        <div className={classes.toolbar}/>
          <main className={classes.layout}>
              <Paper className={classes.paper}>
                  <Typography variant='h4' align='center'>Checkout</Typography>
                  <Stepper activeStep={activeStep} className={classes.stepper}>
                      {steps.map((step) =>(
                          <Step key={step}>
                              <StepLabel >{step}</StepLabel>
                          </Step>
                      ))}
                  </Stepper>
              </Paper>
          </main>

        </>
    );
}

export default Checkout;
