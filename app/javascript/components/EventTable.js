import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

class EventTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/events')
      .then(response => response.json())
      .then(data => this.setState({ events: data }));
  }

  render() {
    const data = this.state.events;
    const columns = [{
        Header: 'Title',
        accessor: 'title'
      }, {
        Header: 'Description',
        accessor: 'description'
      }, {
        Header: 'Start Date',
        accessor: 'startDate'
      }, {
        Header: 'End Date',
        accessor: 'endDate'
      }];
    return <ReactTable data={data} columns={columns} />
  }
}

export default EventTable;