import React from 'react';

import axios from 'axios';


class SignupForm extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
        email: '',
        password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value    });
  }

  handleSubmit(event) {

    event.preventDefault();

    var data = JSON.stringify({
      "email": this.state.email,
      "password": this.state.password,
      "type": this.state.account,
      "fname": this.state.fname,
      "lname": this.state.lname,
      "gender": this.state.gender
    });

       
    if(this.state.confirm_password === this.state.password){
      

      var config = {
        method: 'post',
        url: 'localhost:5000/auth/signup',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response?.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else{
      alert('Your Password does\'nt match!');
    }
  }

    render() {
      
      
      return (

  <div className=' d-flex justify-content-center'>
    <form className='form-floating bg-white rounded-3 shadow p-3 w-50' name="form" id='form' onSubmit={this.handleSubmit}>
      <div className='p-3 vstack gap-3'>

        <div className='justify-content-center hstack gap-3'>
            <button className='btn btn-lg btn-primary'>Facebook</button>
            <button className='btn btn-lg btn-primary'>Facebook</button>
            <button className='btn btn-lg btn-primary'>Facebook</button>
        </div>

        <br/>
        <p className='fs-5'>Or</p>

        <input name="email" id="" className="form-control form-control-lg" type="email" placeholder="Email"
        value={this.state.email} onChange={this.handleInputChange}
        />

        <input name="password" id="" className="form-control form-control-lg" type="password" placeholder="Password"
        value={this.state.password} onChange={this.handleInputChange}
        />

        <div className='d-flex justify-content-between align-content-center'>

          <div>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label ms-2" for="flexCheckDefault">
              Remember Me
            </label>
          </div>

          <a href='http://www.facebook.com'>Forget Password</a>

        </div>

        <input name="submit" id="" className="btn btn-lg btn-secondary d-flex align-self-center w-100" type="submit"/>

      </div>
    </form>
  </div>
      );
    }
  }

export default SignupForm;
