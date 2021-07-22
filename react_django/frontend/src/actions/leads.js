import axios from 'axios';
import {GET_LEADS , ERROR, DELETE_LEAD, ADD_LEAD} from './types';

//GET LEADS
export const getLeads = () => (dispatch) => {
	axios.get('/api/leads/')
	.then((res) => {
		dispatch({
			type: GET_LEADS,
			payload: res.data
		})
	})
	.catch((error) => {
		dispatch({
			type: ERROR,
			payload: error
		})
	})
}
//DELETE LEAD
export const deleteLead = (id) => dispatch => {
	axios.delete(`/api/leads/${id}`)
	.then((res) => {
		dispatch({
			type: DELETE_LEAD,
			payload: id
		})
	})
	.catch((error) => {
		dispatch({
			type: ERROR,
			payload: error
		})
	})
}
//ADD LEAD
export const addLead = (lead) => (dispatch,getState) => {
	axios.post('/api/leads/', lead, tokenConfig(getState))
	.then((res) => {
		dispatch(createMessage({addLead: 'Lead Added'}));
		dispatch({
			type: ADD_LEAD,
			payload: res.data
		});
	})
	.catch((err) => dispatch(returnErrors(err.response.data, err.response.status)))
}