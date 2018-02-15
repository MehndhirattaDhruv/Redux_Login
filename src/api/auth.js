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
    accessToken: 'new login'
  };

	return new Promise((response, rej) => {
    return response({ message: 'Login success!', user: obj });
  })
}
