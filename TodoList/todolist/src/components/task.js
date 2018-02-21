import React, { Component } from 'react';

class Task extends Component {

    constructor(props)
    {
        super(props);
    }

    delete(e)
    {
        fetch(`http://localhost:8080/todos/${ e.target.dataset.id }`);

        this.props.updateTaskList();
    }

    render(){
        return (
            <div className="list-group-item">
                <span>{ this.props.title }</span>
                <button data-id={ this.props.id } onClick={ this.delete.bind(this) } className="btn btn-danger"> X</button>
            </div>
        );
    }
}

export default Task;