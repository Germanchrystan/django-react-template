import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actioncs/types.js';


const initialState = {
	leads: []
}

export default function(state = initialState, action){
	switch (action.type){
		case GET_LEADS:
			return { ...state, leads: action.payload }
		case DELETE_LEAD:
			return {...state, leads: state.leads.filter(l => l.id !== action.payload)}
		case ADD_LEAD:
			return {...state, leads: [...state.leads, action.payload]}
		default :
			return state;
	}
}