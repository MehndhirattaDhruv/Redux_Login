import types from '../types';
import store from '../store';
import {
	loginAPI,
	newRegistrationAPI,
	forgotAPI
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
export function newRegistration(payload) {
	dispatch({
		type: types.AUTH_NEWREGISTER
	})

	return new Promise ((response, rej) => newRegistrationAPI(payload)
		.then(res => {
			dispatch({
				type: types.AUTH_NEWREGISTER_SUCCESS,
				payload: res
			})

			return response(res)
		})
		.catch(err => {
			dispatch({
				type: types.AUTH_NEWREGISTER_FAILED
			})

			return rej(err)
		})
	)

}

export function forgot(payload) {
	dispatch({
		type: types.AUTH_FORGOT
	})

	return new Promise ((response, rej) => forgotAPI(payload)
		.then(res => {
			dispatch({
				type: types.AUTH_FORGOT_SUCCESS,
				payload: res
			})

			return response(res)
		})
		.catch(err => {
			dispatch({
				type: types.AUTH_FORGOT_FAILED
			})

			return rej(err)
		})
	)

}


module.exports = {
  	login,
	newRegistration,
	forgot
}
