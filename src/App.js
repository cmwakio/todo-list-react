import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import FocusableInput from './components/pages/FocusableInput'
import TodoListTest from './components/pages/TodoListTest'
import InputChange from './components/pages/InputChange'
import Header from './components/layout/Header'
import uuid from 'uuid'
import axios from 'axios'

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      },
    ],
    focused: false
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => {this.setState({todos: res.data})})
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }

        return todo;
      })
    })
  }

  DelTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
    })
    
  }

  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res => {
      this.setState({ todos: [...this.state.todos, res.data] })
    })
    
  }

  changeFocus = () => {
    console.log('changed: ', this.state.focused)
    this.setState({focused: !this.state.focused})
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} DelTodo={this.DelTodo} />
            </React.Fragment>
          )}/>

          <Route path="/about" component={About} />

          <Route path="/inputfocus" exact render={props => (
            <React.Fragment>
              <FocusableInput focused={this.state.focused} changeFocus={this.changeFocus} />
            </React.Fragment>
          )}/>

          <Route path="/todotest" exact render={props => (
            <React.Fragment>
              <TodoListTest
                  items={this.props.items}
                  onItemClick={(item, event) => { console.log(item, event, 'here') }}
                />
            </React.Fragment>
          )}/>
          <Route path="/inputchange" exact render={props => (
            <React.Fragment>
              <InputChange />
            </React.Fragment>
          )}/>
          
        </div>
      </Router>

    )
  }

}

App.defaultProps = {
  focused: false,
  items: [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
]
};



export default App;
