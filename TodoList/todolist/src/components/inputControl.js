import React, { Component } from 'react';


class InputControl extends Component {

    constructor(props)
    {
        super(props);
    }

    addTask(){

        let task = document.querySelector("#task");

        this.props.add(task.value);

        fetch('http://localhost:8080/todos/', {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'}, // this line is important, if this content-type is not set it wont work
            body: `title=${task.value}`
        }).then(()=>{

            this.props.updateTaskList();

        });

    }

    render() {

        return (<div className="input-control">
            <div className="form-inline">
                <div className="form-group">
                    <input type="text" className="form-control" id="task" />
                    <button onClick={ this.addTask.bind(this) } className="btn btn-primary">Ajouter</button>
                </div>
            </div>
        </div>);

    }

}

export default InputControl;