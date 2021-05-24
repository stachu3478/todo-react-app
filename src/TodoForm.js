import './App.css';
import { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '' }
  }

  addTodo() {
    this.props.todoAdded(this.state.name)
    this.setState({ name: '' })
  }

  keyPressed(evt) {
    if (evt.key === 'Enter') {
      this.addTodo()
    }
  }

  nameInputChanged(evt) {
    this.setState({ name: evt.target.value })
  }

  render() {
    const input = <input type="text" name="todoName" value={this.state.name} onChange={evt => this.nameInputChanged(evt)} onKeyPress={evt => this.keyPressed(evt)} />
    return (
      <div className="form">
        {input}
        <button onClick={() => this.addTodo()}>Add</button>
      </div>
    );
  }
}

export default TodoForm;
