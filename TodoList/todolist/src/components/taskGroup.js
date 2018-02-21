import React, { Component } from 'react';
import Task from './task';

class TaskGroup extends Component {

    constructor(props)
    {
        super(props);
    
    }

    render(){
        
        let tasks = this.props.tasksList.map((task,index)=>{

            return <Task updateTaskList={ this.props.updateTaskList } key={index} title={ task.title } id={task._id} />;

        });

        return (
            <div className="list-group">
            {tasks}
          </div>
        );
    }
}

export default TaskGroup;