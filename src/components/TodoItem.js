import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
          {title}
          <button onClick={this.props.DelTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

TodoItem.protoTypes = {
  todo: PropTypes.object
}

const btnStyle = {
  background: '#ff0000',
  border: 'none',
  color: '#fff',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
  padding: '5px 9px'
}

export default TodoItem;
