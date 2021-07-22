import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';


class Leads extends React.Component {
	static propTypes = {
		leads: PropTypes.array.isRequired,
		getLeads : PropTypes.func.isRequired,
		deleteLead : PropTypes.func.isRequired
	}
	componentDidMount(){
		this.props.getLeads();
	}

	render() {
		return(
			<div>
				<h1>Leads List </h1>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>E-mail</th>
							<th>Message</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{this.props.leads.map((l) => ( 
							
							<tr key={l.id}>
								<td>{l.id}</td>
								<td>{l.name}</td>
								<td>{l.email}</td>
								<td>{l.message}</td>
								<td><button onClick={this.props.deleteLead.bind(this, l.id)} className="btn btn-danger btn-sm">Delete</button></td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	leads: state.leads.leads
})


export default connect (mapStateToProps, {getLeads, deleteLead })(Leads);