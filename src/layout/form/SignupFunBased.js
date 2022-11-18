import React from 'react';
import axios from 'axios';
var form = document.getElementbyId('form');
const SignupForm = () => {

  const [formValue, setformValue] = React.useState({
    email: '',
    password: ''
  });

  const handleSubmit = async() => {

    // form.preventDefault();

    console.log("Running Submit");
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("username", formValue.email);
    loginFormData.append("password", formValue.password);

    var data = JSON.stringify({
      email: formValue.email,
      password: formValue.password,
      // "type": this.state.account,
      // "fname": this.state.fname,
      // "lname": this.state.lname,
      // "gender": this.state.gender
    });

    console.log(data);

    try {
      // make axios post request

      var config = {
        method: 'post',
        url: 'http://localhost:5000/auth/login',
        headers: {
          'Content-Type': 'application/json'
        },
        data : loginFormData

      };


      axios(config).then(function (response) {

          document.write(JSON.stringify(response) + "<br/>");

      });
      console.log("I'm a response");

    } catch(error) {
      console.log(error);
    }
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  return (
  <div className='d-flex justify-content-center'>
    <form className='form-floating bg-white rounded-3 shadow p-3 w-50' name="form" id='form' onSubmit="return false">
      <div className='p-3 vstack gap-3'>

        <div className='justify-content-center hstack gap-3'>
            <button className='btn btn-lg btn-primary'>Facebook</button>
            <button className='btn btn-lg btn-primary'>Facebook</button>
            <button className='btn btn-lg btn-primary'>Facebook</button>
        </div>

        <select className="form-select form-select-lg text-secondary">
            <option value="0">Personal Account</option>
            <option value="1">Business Account</option>
        </select>

        <div className='justify-content-center hstack gap-3'>

          <input name="fname" id="" className="form-control form-control-lg" type="text" placeholder="First Name"/>

          <input name="lname" id="" className="form-control form-control-lg" type="text" placeholder="Last Name"/>

        </div>

        <div className='justify-content-center hstack gap-3'>

          <input name="dob" id="" type="number" className="form-control form-control-lg" min="1" max="31" step="1" placeholder="day" />

          <input name="mob" id="" type="number" className="form-control form-control-lg" min="1" max="12" step="1" placeholder="Month" />

          <input name="yob" id="" type="number" className="form-control form-control-lg" min="1900" max="2099" step="1" placeholder="Year" />

        </div>

        <select className="form-select form-select-lg text-secondary" name="b_category">
            <option>Business Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>

        <input name="email" id="email" className="form-control form-control-lg" type="email" placeholder="Email"
        value={formValue.email}
        onChange={handleChange}
        />

        <input name="password" id="password" className="form-control form-control-lg" type="password" placeholder="Password"
        value={formValue.password}
        onChange={handleChange}
        />

        <input name="confirm_password" id="" className="form-control form-control-lg" type="password" placeholder="Confirm Password"/>

        <input name="submit" id="" className="btn btn-lg btn-secondary d-flex align-self-center w-50" onClick={handleSubmit}/>

      </div>
    </form>
  </div>
)
}

export default SignupForm;
