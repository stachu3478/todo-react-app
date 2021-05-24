import './App.css';
import { Component } from 'react';
import TodoOptions from './TodoOptions';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class AppContent extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: [], sequence: 0, hideCompleted: false }
  }

  addTodo(name) {
    const newTodo = { name, id: this.state.sequence, completed: false }
    this.setState({
      todos: this.state.todos.concat(newTodo),
      sequence: this.state.sequence + 1
    })
  }

  hideCompletedSwitched() {
    this.setState({ hideCompleted: !this.state.hideCompleted })
  }

  completedSwitched(id) {
    const todo = this.state.todos[id]
    todo.completed = !todo.completed
    this.setState({ todos: this.state.todos })
  }

  render() {
    return (
      <div className="App-content">
        <TodoOptions hideCompleted={this.state.hideCompleted} hideCompletedSwitched={() => this.hideCompletedSwitched()} />
        <hr></hr>
        <TodoList todos={this.todos} completedSwitched={id => this.completedSwitched(id)} />
        <hr></hr>
        <TodoForm todoAdded={name => this.addTodo(name)} />
      </div>
    );
  }

  get todos() {
    const todos = this.state.todos
    if (this.state.hideCompleted)
      return todos.filter(todo => !todo.completed)
    return todos
  }
}

export default AppContent;
