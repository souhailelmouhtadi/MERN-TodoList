import React, { Component } from 'react';
import InputControl from './components/inputControl';
import TaskGroup from './components/taskGroup';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      tasksList: []
    }

  }

  componentWillMount(){

    fetch("http://localhost:8080/todos/").then(data=>data.json()).then(json=>{


      this.setState({
        tasksList: [...json]
      });

    });

  }

  addTaskHandler(title){

    this.setState({
      tasksList: [...this.state.tasksList,{_id:'id',title: title }]
    });

  }

  updateTaskListHandler()
  {
    fetch("http://localhost:8080/todos/").then(data=>data.json()).then(json=>{

      this.setState({
        tasksList: [...json]
      });

    });
  }

  render() {
    return (
        <div className="todoapp">
          <InputControl updateTaskList={ this.updateTaskListHandler.bind(this) }  add={ this.addTaskHandler.bind(this) } />
          <TaskGroup updateTaskList={ this.updateTaskListHandler.bind(this) }  tasksList={ this.state.tasksList } />
        </div>
    );
  }
}

export default App;
