import React, { Component } from 'react';
import EventTable from './EventTable';
import AddEventForm from './AddEventForm';
import axios from 'axios';

class App extends Component{

	constructor(){
		super();

		this.state = {
			title: '',
			description: '',
			startDate: '',
			endDate: '',
      events: []
    };
	}

	componentDidMount() {
    fetch('http://localhost:3000/events')
      .then(response => response.json())
      .then(data => this.setState({ events: data }));
  }

  onDateChange = (field_and_date) => {
  	Object.assign(this.state, field_and_date); 
  }

  handleInputChange = (e) => {
  	Object.assign(this.state, {[e.target.name]: e.target.value});
  }

	handleFormSubmit = (e) => {
		e.preventDefault();
    e.target.reset();

    let event = { 
    	title: this.state.title,
    	description: this.state.description,
    	startDate: this.state.startDate,
    	endDate: this.state.endDate
    }

    var self = this;
    axios.post('/events', {
      event: event
    })
    .then(function (response) {
    	self.setState({
    		events: [...self.state.events, event]
    	})
      alert("New Event has been added successfuly!");
    })
    .catch(function (error) {
    	alert("Failed to add event!");
      console.log(error);
    });
	}

	render(){
		return (
		  <div>
		  	<AddEventForm handleFormSubmit={ this.handleFormSubmit }
		  		handleInputChange={ this.handleInputChange } onDateChange={this.onDateChange} />
		    <EventTable events={ this.state.events }/>	
		  </div>
		);
	}
} 

export default App;