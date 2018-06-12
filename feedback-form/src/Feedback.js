import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import './Feedback.css'

const buttonStyle = {
  background: '#56CCF2',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
};

class Feedback extends Component {
    render() {
      return (
        <div className="Feedback">
            {/* <h1 className="Feedback-title">Please tell us about your experience</h1> */}
            <Typography 
              // headlineMapping='{display4: 'h1'}' 
              variant='headline' 
              paragraph='true' 
              align= 'center' 
              color='inherit' 
              gutterBottom='true'
            >
              Please tell us about your experience
            </Typography>
            <TextField
              id="name"
              label="Name"
              margin="normal"
              type='name'
              helperText='*Required'
              fullWidth='true'
            />
            <br/>
            <TextField
              id="email"
              label="Email"
              margin="normal"
              type='email'
              helperText='*Required'
              fullWidth='true'
            />
            <br/>
            <TextField
              id="text"
              label="Type your text here"
              margin="normal"
              type='text'
              multiline='true'
              helperText='*Required'
              fullWidth='true'
            />
            <br/>
            <Button variant="contained" color="primary">
              Submit
            </Button>
        </div>
      );
    }
  }
  
  export default Feedback;
  