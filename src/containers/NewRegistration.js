import React from 'react';
import NewRegistrationForm from '../components/NewRegistrationForm';
import actions from '../actions';
//import { connect } from 'react-redux';
import validateInput from '../Utilities/Validations/NewRegistrationFirst';
//@connect((state) => state)
export default class NewRegistration extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        user : {
          name : '',
          email:'',
          phone:'',
          industry_Name:'',
          address:'',
        },
        errors : {}
      }
    }

        onChange = (e) => {
          let { user } = this.state;
          const { name, value } = e.target;
          user[name] = value;
          console.log(user,"user")
          this.setState({ user})
          }

        onSubmit = (e) => {
          e.preventDefault();
          if(this.isValid()){
          console.log(this.state.user)
          actions.newRegistration(this.state.user)
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

        onClear = () =>{
          this.setState({
            user : {
              name : '',
              email:'',
              phone:'',
              industry_Name:'',
              address:'',
              
            }
          })
        }

         render(){
             const { errors, user } = this.state;
             
          return(
            <NewRegistrationForm
              user={user}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              onClear={this.onClear}
              errors={errors}
            />

);
}
}
