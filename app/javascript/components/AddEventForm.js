import React from 'react';
import Pikaday from 'pikaday';

import 'pikaday/css/pikaday.css';

export const formatDate = (d) => {
  const YYYY = d.getFullYear();
  const MM = `0${d.getMonth() + 1}`.slice(-2);
  const DD = `0${d.getDate()}`.slice(-2);

  return `${YYYY}-${MM}-${DD}`;
};

class AddEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.eventForm = React.createRef();
    this.startDate = React.createRef();
    this.endDate = React.createRef();
  }

  componentDidMount() {
    new Pikaday({
      field: this.startDate.current,
      onSelect: (date) => {
        const formattedDate = formatDate(date);
        this.startDate.current.value = formattedDate;
        this.props.onDateChange({ startDate: formattedDate });
      },
    });

    new Pikaday({
      field: this.endDate.current,
      onSelect: (date) => {
        const formattedDate = formatDate(date);
        this.endDate.current.value = formattedDate;
        this.props.onDateChange({ endDate: formattedDate });
      },
    });
  }

  render() {
    return (
      <div>
        <h2>New Event</h2>
        <form className="eventForm" onSubmit={this.props.handleFormSubmit} ref={this.eventForm}>
          <div>
            <label htmlFor="title">
              <strong>Title:</strong>
              <input type="text" id="title" name="title" onChange={this.props.handleInputChange} />
            </label>
          </div>
          <div>
            <label htmlFor="speaker">
              <strong>Description:</strong>
              <textarea cols="40" rows="4" id="description" name="description" onChange={this.props.handleInputChange} />
            </label>
          </div>
          <div>
            <label htmlFor="event_date">
              <strong>Start Date:</strong>
              <input type="text" id="start_date" name="startDate" ref={this.startDate} />
            </label>
          </div>
          <div>
            <label htmlFor="event_date">
              <strong>End Date:</strong>
              <input type="text" id="end_date" name="endDate" ref={this.endDate} />
            </label>
          </div>
          <div className="form-actions">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddEventForm;