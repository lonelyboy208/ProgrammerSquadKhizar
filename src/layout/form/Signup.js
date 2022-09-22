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

  <div className='d-flex justify-content-center'>
    <form className='form-floating bg-white rounded-3 shadow p-3 w-50' name="form" id='form' onSubmit={this.handleSubmit}>
      <div className='p-3 vstack gap-3'>

        <div className='justify-content-center hstack gap-3'>
            <button className='btn btn-lg btn-primary'>Facebook</button>
            <button className='btn btn-lg btn-primary'>Facebook</button>
            <button className='btn btn-lg btn-primary'>Facebook</button>
        </div>

        <select className="form-select form-select-lg text-secondary" name='account'
          value={this.state.account} onChange={this.handleInputChange} defaultValue={'Account Type'}
        >
            <option selected disabled>Account type</option>
            <option value="0">Personal Account</option>
            <option value="1">Business Account</option>
        </select>

        <div className='justify-content-center hstack gap-3'>

          <input name="fname" id="" className="form-control form-control-lg" type="text" placeholder="First Name"
          value={this.state.fname} onChange={this.handleInputChange}
          />

          <input name="lname" id="" className="form-control form-control-lg" type="text" placeholder="Last Name"
          value={this.state.lname} onChange={this.handleInputChange}
          />

        </div>

        <div className='justify-content-center hstack gap-3'>          

          <input name="dob" id="" type="number" className="form-control form-control-lg" min="1" max="31" step="1" placeholder="Day" />
        
          <input name="mob" id="" type="number" className="form-control form-control-lg" min="1" max="12" step="1" placeholder="Month" />

          <input name="yob" id="" type="number" className="form-control form-control-lg" min="1900" max="2099" step="1" placeholder="Year" />

        </div>

        <select className="form-select form-select-lg text-secondary" name="b_cate"
          value={this.state.gender} onChange={this.handleInputChange} defaultValue={'Gender'}
        >
            <option selected disabled>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>

        <input name="email" id="" className="form-control form-control-lg" type="email" placeholder="Email"
        value={this.state.email} onChange={this.handleInputChange}
        />

        <input name="password" id="" className="form-control form-control-lg" type="password" placeholder="Password"
        value={this.state.password} onChange={this.handleInputChange}
        />

        <input name="confirm_password" id="" className="form-control form-control-lg" type="password" placeholder="Confirm Password"
        value={this.state.confirm_password} onChange={this.handleInputChange}
        />

        <input name="submit" id="" className="btn btn-lg btn-secondary d-flex align-self-center w-50" type="submit"/>

      </div>
    </form>
  </div>
      );
    }
  }

export default SignupForm;
