import { apiPost, apiGet, apiReq, apiPut } from '../utils';
import { formTypes } from '../constants';

const headers = {
	'Content-Type': formTypes.json,
	'Content-Type': formTypes.urlencoded
}


export function loginAPI (user) {
  const obj = {
    id: 1,
    email: user.email,
    password:user.password,
    accessToken: '  t6uhjef98u34rklm4r34ioj'
  };

	return new Promise((response, rej) => {
    return response({ message: 'Login success!', user: obj });
  })
}

export function newRegistrationAPI (user) {
  const obj = {
    id: 2,
    name:user.name,
    email: user.email,
    phone:user.phone,
    industry_Name:user.industry_Name,
    contact:user.contact,
    accessToken: 'new registration token'
  };

	return new Promise((response, rej) => {
    return response({ message: 'New Registartion success!', user: obj });
  })
}

export function forgotAPI (user) {
  const obj = {
    id: 3,
    email: user.email,
    accessToken: 'pooop'
  };

	return new Promise((response, rej) => {
    return response({ message: 'New Forgot success!', user: obj });
  })
}