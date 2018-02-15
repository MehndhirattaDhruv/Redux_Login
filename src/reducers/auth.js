import types from '../types';
import { getUser, saveUser } from '../utils';

let initState = {
	fetching: false,
 	user: {}
}

const user = getUser();

if(user) {
	initState = {
		...initState,
		user
	}
}

export default function(state = initState, action){//pure virtual functio
//used for reducers function takes previous state and action
	switch (action.type) {

		case types.AUTH_LOGIN :
			 return {...state, fetching: true}//and returns next state & fetching is used for loading between request and approval
		case  types.AUTH_SUCCESS :

			let newUser = {...action.payload.user};
			saveUser(newUser)
			return {...state,fetching: false, user : newUser}

// forgot password
		case types.AUTH_FORGOT :
			return {fetching: true}

		case types.AUTH_FORGOT_SUCCESS :

			newUser = {...action.payload.user};
			saveUser(newUser)
			return {...state,fetching: false, user : newUser}

		case types.AUTH_FORGOT_FAILED :
			return {...state, fetching: false}
		default :
			return {...state}
	}

}
