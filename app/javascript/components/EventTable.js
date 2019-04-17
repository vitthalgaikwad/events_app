import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

class EventTable extends React.Component {
  constructor(props) {
    super(props);     
  }  

  render() {
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
    return <ReactTable data={this.props.events} columns={columns} />
  }
}

export default EventTable;