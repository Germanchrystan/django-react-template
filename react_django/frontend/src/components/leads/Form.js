import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads'

export default class Form extends React.Component {
	state = {
		name:'',
		email: '',
		message: ''
	}

	onChange = (e) => this.setState({[e.target.name]: e.target.value})

	onSubmit = (e) => {
		e.preventDefault();
		const {name, email, message } = this.state;
		const lead = {name, email, message };
		this.props.addLead(lead);
		this.setState({
			name: '',
			email: '',
			message: '',
		})
	}

	render() {
		return(
			<div className='card card-body mb-4'>
				<h1>Add Lead Form </h1>
				<form onSubmit={this.onSubmit}>
					<div className='form-group'>
						<label>Name</label>
						<input
							className='form-control'
							type='text'
							name='name'
							onChange={this.onChange}
							value={name}
						/>
					</div>
					<div className='form-group'>
						<label>E-mail</label>
						<input
							className='form-control'
							type='email'
							name='email'
							onChange={this.onChange}
							value={email}
						/>
					</div>
					<div className='form-group'>
						<label>Message</label>
						<textarea
							className='form-control'
							type='text'
							name='message'
							onChange={this.onChange}
							value={message}
						/>
					</div>
					<div>
						<button type='submit' className='btn btn-primary'>
							Submit
						</button>
					</div>
				</form>
			</div>
		)
	}
}

export default connect(null, {addLead})(Form);