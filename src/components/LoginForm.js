import React from 'react';
import {Grid,Row,Col,FormControl,Button,ControlLabel} from 'react-bootstrap';

const LoginForm = (props) => {
    const{user,errors,onChange,onSubmit,isValid}=props;
    return(
        <Grid>
            <form onSubmit={onSubmit} className="form_Background">
                    <Grid>
                        <Row>
                            <Col xs={12} md={12} lg={12} sm={12}>
                                <h1 className="headingLogin"> Login Form </h1>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid>
                        <Row>
                            <Col md={6} mdOffset={3} xs={10} xsOffset={1}>
                                <FormControl
                                    className="form_Login"
                                    value={user.email}
                                    type="text"
                                    placeholder="Email"
                                    onChange={onChange}
                                    name="email"
                                    />
                                    {errors.email ? <ControlLabel  className="login_Validations">{errors.email}</ControlLabel> : null}
                            </Col>
                        </Row>                   
                    </Grid>

                    <Grid>
                        <Row>
                            <Col md={6} mdOffset={3} xs={10} xsOffset={1}>
                                <FormControl
                                    className="form_Login"
                                    value={user.password}
                                    type="password"
                                    placeholder="Password"
                                    onChange={onChange}
                                    name="password"
                                    />
                                    {errors.password ? <ControlLabel className="login_Validations">{errors.password}</ControlLabel> : null}
                            </Col>
                        </Row>                   
                    </Grid>

                    <Grid>
                        <Row>
                            <Col md={6} mdOffset={5} xs={10} xsOffset={4} sm={6} sm={0}>
                                <Button
                                    className="form_Login"
                                    bsStyle="success"    
                                    type="submit"                        
                                    > Submit
                                </Button>
                            </Col>
                        </Row>                   
                    </Grid>
            </form>
        </Grid>            
            
        
    );
}

export default LoginForm;

