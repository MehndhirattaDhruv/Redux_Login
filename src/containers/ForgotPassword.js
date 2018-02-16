import React from 'react';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  Button,
  ControlLabel,
  FormControl,
  Well
} from 'react-bootstrap';
import { connect } from 'react-redux';
import actions from '../actions';
import validateInput from '../Utilities/Validations/Forgot_Password_First';

 @connect((state) => state)
export default class ForgotPassword extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    user : {
    email : '',
    },
    errors : {},
  }
  }

    onChange = (e) => {
    let { user } = this.state;
    const { name, value } = e.target;
    user[name] = value;
    console.log(user,"user")
    this.setState({ user  , errors: {
        ...this.state.errors,
        [name] : ''
      }})
    }

    onSubmit = (e) => {
    e.preventDefault();
    if(this.isValid()){
      console.log(this.state.user)
      actions.forgot(this.state.user)
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
      const { errors, user,onChange,onSubmit,isValid} = this.state;
    return (
      <Grid container={this} className="grid_Forgot_Pass">
      <form onSubmit={this.onSubmit}>
          <Row  style={{marginTop:'25%'}}>
            <Col xs={12} md={6} sm={6} smOffset={3} mdOffset={3}>
            <Well className="well_Forgot_Pass">

              <Row >
              <Col xs={12}>
              <h3  style={{color:'green'}}>Recover your Password</h3>
              </Col>
              </Row>
    <Row >
              <Col xs={12}>
              <ControlLabel className="login_Control_Label">Email</ControlLabel>
              <FormControl
              value={user.email}
              type="text"
              placeholder="Email"
              onChange={this.onChange}
              name="email"
            />
            {errors.email ? <ControlLabel  className="error_Control_Label">{errors.email}</ControlLabel> : null}
              </Col>
              </Row>

              <br/>

              <Row  className="text-center">
              <Col xs={12} >
              <Button  bsStyle="success" type="submit" >Submit</Button>
              </Col>
              </Row>

          </Well>
          </Col>
          </Row>
        </form>
      </Grid>
    )
  }
}