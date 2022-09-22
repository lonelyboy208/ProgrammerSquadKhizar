import React from 'react';
import SignupForm from './form/Signup';
import LoginForm from './form/Login';


const body = (
    <center>
    <div className='bg-light text-center p-5'>

        <h1 className='display-1 fw-bolder'>iBouge</h1>
        <p className="lead">
            This is a lead paragraph.
        </p>
            
            <LoginForm/>

    </div>
    </center>
);

class Body extends React.Component {


    render() {
      return (
         body
      );
    }
  }

export default Body;