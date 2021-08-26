import React, { Component } from 'react'
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export class App extends Component {
  constructor() {
    super()
    this.state = {
      name: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
      },
      error: []
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submit = (evt) => {
    evt.preventDefault();
    let error = []
    if (!this.state.email?.trim || !validEmailRegex.test(this.state.email)) {
      error.push('invalidEmail')
    }
    if (this.state.name?.trim().length < 5 || !this.state.name) {
      error.push('invalidName')
    }
    if (this.state.password?.trim().length < 8 || !this.state.password) {
      error.push('invalidPassword')
    }
    if (error.length) {
      this.setState({ error })
    } else {
      this.setState({ error: [] })
    }
    // this.state.errors.fullName = (this.state.name < 5) ? 'Full Name must be at least 5 characters long!' : "";
    // this.state.errors.email = (validEmailRegex.test(this.state.email)) ? "" : "Invalid Email";
    // this.state.errors.password = (this.state.password.trim().length < 8) ? 'Password must be at least 8 characters long!' : '';
  }
  reset = (evt) => {
    evt.preventDefault();
    this.setState({
      name: "",
      email: "",
      password: "",
      error: [],
    })
  }
  render() {

    return (
      <>
        <div className="container my-3">
          <h2>Form Validation</h2>
          <p>FullName : </p>
          <input className="w-100" type="text" name="name" value={this.state.name} placeholder="Enter your name" onChange={(event) => this.handleChange(event)} />
          {this.state.error.includes('invalidName') && (
            <p className="error">Full Name must be at least 5 characters long!</p>
          )}
          <p className="my-2">Mail : </p>
          <input className="w-100" type="mail" name="email" value={this.state.email} placeholder="Enter your Email" onChange={(event) => this.handleChange(event)} />
          {this.state.error.includes('invalidEmail') && (
            <p className="error">Invalid Email</p>
          )}
          <p className="my-2">Password : </p>
          <input className="w-100" type="password" name="password" value={this.state.password} placeholder="Enter password" onChange={(event) => this.handleChange(event)} />
          {this.state.error.includes('invalidPassword') && (
            <p className="error">Password must be at least 8 characters long!</p>
          )}
          <input className="btn btn-primary my-3" type="submit" value="Submit" onClick={(event) => this.submit(event)} />
          <input className="btn btn-primary my-3 mx-3" type="reset" value="Reset" onClick={(event) => this.reset(event)} />
        </div>
      </>
    );
  }
}
export default App
