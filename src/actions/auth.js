import types from '../types';
import store from '../store';
import {
	loginAPI
} from '../api/auth';

const {dispatch} = store;

export function login(payload) {
	dispatch({
		type: types.AUTH_LOGIN
	})

	return new Promise ((response, rej) => loginAPI(payload)
		.then(res => {
			dispatch({
				type: types.AUTH_SUCCESS,
				payload: res
			})

			return response(res)
		})
		.catch(err => {
			dispatch({
				type: types.AUTH_FAILED
			})

			return rej(err)
		})
	)

}


module.exports = {
  login
}
