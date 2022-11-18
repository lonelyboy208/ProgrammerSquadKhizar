import React from 'react';

import axios from 'axios';


class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        fname: '',
        lname: '',
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
      "fname": this.state.fname,
      "lname": this.state.lname,
    });

    console.log(data);

      var config = {
        method: 'post',
        url: 'http://localhost:5000/auth/test',
        headers: {
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
      .then(function (response) {

        const fetchdata = response.data.user.user;

        fetchdata.forEach(singleuser => {
          document.write(singleuser.fname + "<br/>");
          document.write(singleuser.lname + "<br/><br/>");
        });

        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

    render() {


      return (

  <div className=' d-flex justify-content-center'>
    <form className='form-floating bg-white rounded-3 shadow p-3 w-50' name="form" id='form' onSubmit={this.handleSubmit}>
      <div className='p-3 vstack gap-3'>

        <input name="fname" id="" className="form-control form-control-lg" type="text" placeholder="First Name"
        value={this.state.fname} onChange={this.handleInputChange}
        />

        <input name="lname" id="" className="form-control form-control-lg" type="text" placeholder="Last Name"
        value={this.state.lname} onChange={this.handleInputChange}
        />

        <input name="submit" id="" className="btn btn-lg btn-primary d-flex align-self-center w-100" type="submit"/>

      </div>
    </form>
  </div>
      );
    }
  }

export default Search;
