import './App.css';
import { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const todos = this.props.todos
    const todoItems = todos.map((todo) =>
      <Todo key={todo.id} {...todo} completedSwitched={id => this.props.completedSwitched(id)} />
    );
    return (
      <div className="list">
        {todoItems}
        { todos.length ? null : 'Nothing to do...' }
      </div>
    );
  }
}

export default TodoList;
