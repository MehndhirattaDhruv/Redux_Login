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
  const NewRegistrationForm = (props) =>{
    const{user,errors,onChange,onSubmit,isValid,onClear}=props;
    return(
      <Grid container={this} >
        <form onSubmit={onSubmit} >
          <Row>
            <Col xs={12} md={6} sm={6} smOffset={3} mdOffset={3}>
              <Well style={{marginTop:'40px',backgroundColor:'#eee'}}>

                <Row className="new_Registration_Row">
                  <Col xs={12}>
                    <h3  style={{color:'green'}}>Registration Of User</h3>
                  </Col>
                </Row>         

                <Row className="new_Registration_Row">
                  <Col xs={12}>
                    <ControlLabel className="login_Control_Label">Name</ControlLabel>
                    <FormControl
                      value={user.name}
                      type="text"
                      placeholder="name"
                      onChange={onChange}
                      name="name"
                    />
                    {errors.name ? <ControlLabel  className="login_Validations">{errors.name}</ControlLabel> : null}
                  </Col>
                </Row>

                <Row className="new_Registration_Row">
                  <Col xs={12}>
                    <ControlLabel className="login_Control_Label" >Email</ControlLabel>
                    <FormControl
                      value={user.email}
                      type="text"
                      placeholder="Email"
                      onChange={onChange}
                      name="email"
                    />
                    {errors.email ? <ControlLabel  className="login_Validations">{errors.email}</ControlLabel> : null}
                  </Col>
                </Row>

                <Row className="new_Registration_Row">
                  <Col xs={12}>
                    <ControlLabel className="login_Control_Label">Phone</ControlLabel>
                    <FormControl
                    value={user.phone}
                    type="phone"
                    placeholder="phone"
                    onChange={onChange}
                    name="phone"
                    />
                    {errors.phone ? <ControlLabel  className="login_Validations">{errors.phone}</ControlLabel> : null}
                  </Col>
                </Row>

                <Row className="new_Registration_Row">
                  <Col xs={12}>
                    <ControlLabel className="login_Control_Label">Industry Name</ControlLabel>
                    <FormControl
                      value={user.industry_Name}
                      type=";text"
                      placeholder="industry Name"
                      onChange={onChange}
                      name="industry_Name"
                    />
                    {errors.industry_Name ? <ControlLabel  className="login_Validations">{errors.industry_Name}</ControlLabel> : null}
                  </Col>
                </Row>

                <Row className="new_Registration_Row">
                  <Col xs={12}>
                    <ControlLabel className="new_Registration_Label">Contact Address</ControlLabel>
                    </Col>
                    <Col xs={12}>
                    <FormControl
                      value={user.address}
                      type="text"
                      placeholder="Address"
                      onChange={onChange}
                      name="address"
                    />
                    {errors.address ? <ControlLabel  className="login_Validations">{errors.address}</ControlLabel> : null}
                  </Col>
                </Row>

                <Row className="new_Registration_Row">
                  <Col xs={12}>
                    <input type="checkbox" value="" />
                    <ControlLabel style={{marginTop:'10px',marginLeft:'40px'}}>Accept Terms and Condtions</ControlLabel>
                  </Col>
                </Row>


                <Row className="new_Registration_Row">
                  <Col xs={6} className="text-left">
                    <Button type="submit" style={{marginLeft:'150px'}} bsStyle="success">Submit</Button>
                    </Col>
                    <Col xs={6} className="text-center">
                    <Button onClick={onClear}
                    bsStyle="danger">clear</Button>
                  </Col>
                </Row>

            </Well>
          </Col>
          </Row>
        </form>
      </Grid>

    );
  }

export default NewRegistrationForm;
