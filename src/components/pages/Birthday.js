import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {RadioGroup, Radio} from 'react-radio-group'

class Birthday extends Component {
  state = {
    sortby: ""
  }

  handleChange = (val) => {
    this.setState({sortby: val})
    this.props.sortByNameOrDate(val)
  }

  render() {
    return (
      <React.Fragment>
        <div className="w-50 mx-auto">
          <div style={{textAlign: 'center'}}>
            <h2>Birthday Records</h2>
          </div>
          <div style={{textAlign: 'center'}}>
          <RadioGroup name="fruit" selectedValue={this.state.sortby} onChange={this.handleChange}>
            <Radio value="name" /> Sort by name
            <Radio value="date" style={{marginLeft: '8px'}} /> Sort by date
          </RadioGroup>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <td>Person name</td>
                <td>Date of Birth</td>
              </tr>
            </thead>
            <tbody>
              {this.props.birthdays.map((birthday) => (
                <tr key={birthday.id}>
                  <td>{birthday.name}</td>
                  <td>{birthday.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </React.Fragment>
    )
  }
}

Birthday.protoTypes = {
  birthdays: PropTypes.array
}


export default Birthday;
