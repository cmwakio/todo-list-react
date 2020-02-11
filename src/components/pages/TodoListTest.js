import React from 'react';

const TodoItemTest = (props) => <li onClick={props.onClick}>{props.item.text}</li>

class TodoListTest extends React.Component {
  render() {
    const { items, onClick } = this.props;
    return (<ul onClick={onClick}>
      {items.map((item, index) => 
                 <TodoItemTest item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
    </ul>);
  }
  
  handleItemClick(item, event) {
    // Write your code here
    if(!item.done) {
      this.props.onItemClick(item, event)
    } else{
      event.stopPropagation();
    }
    
  }
}

export default TodoListTest;

