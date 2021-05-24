import './App.css';
import { Component } from 'react';

class TodoOptions extends Component {
  render() {
    return (
      <div className="options">
        <input type="checkbox" id="hideCompleted" checked={this.props.hideCompleted} onChange={ () => this.props.hideCompletedSwitched() }></input>
        <label htmlFor="hideCompleted">hide completed</label>
      </div>
    );
  }
}

export default TodoOptions;
