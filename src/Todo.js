import './App.css';
import { Component } from 'react';

class Todo extends Component {
  render() {
    const name = this.props.name
    const inputId = `todo-${name}`
    return (
      <p className={this.props.completed ? 'todo completed' : 'todo'}>
        <input type="checkbox" id={inputId} checked={this.props.completed} onChange={ () => this.props.completedSwitched(this.props.id) }></input>
        <label htmlFor={inputId}>{name}</label>
      </p>
    );
  }
}

export default Todo;
