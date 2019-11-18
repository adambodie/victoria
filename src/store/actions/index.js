import * as types from '../constants';


export function increment(text) {
	return {
		type: types.INCREMENT,
		text
	}
}
export function decrement(text) {
	return {
		type: types.DECREMENT,
		text
	}
}