import React from 'react';
import  { LoginForm } from '../components';
import validateInput from '../Utilities/Validations/LoginFirst';
import actions from '../actions';
import { connect } from 'react-redux';
//@connect((state) => state)
export default class Login extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        user : {
        email : '',
        password : ''
        },
        errors : {}

      }
  }

  onChange = (e) => {
    let { user } = this.state;
    const { name, value } = e.target;
    user[name] = value;
    console.log(user,"user")
    this.setState({ user })

  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.isValid()){
      console.log(this.state.user);
      actions.login(this.state.user)
      .then(res => {
        console.log(res);
        
      })
      .catch(err => {
        console.log(err);
      });

    }
  }


  isValid = () => {
    let { errors, isValid } = validateInput(this.state.user);
    console.log( errors, isValid)
    this.setState({ errors })
    if(!isValid) {
      isValid = false;

    }
    return isValid;
  }


  render() {
    const { errors, user } = this.state;
    return (

       <LoginForm
        user={user}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        errors={errors}

      />

    )
  }
}
