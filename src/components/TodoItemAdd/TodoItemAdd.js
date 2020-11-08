import React, { Component } from 'react';

import './TodoItemAdd.css';

export default class TodoItemAdd extends Component {
    state = {
        label: '',
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value,
        })
    };

    submitAddedValue = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: '',
        })
    };

    render() {
        return (
            <form className="todo-item-add"
            onSubmit={this.submitAddedValue}>
                <div className="input-group mb-3">

                    <input type="text" 
                    className="form-control" 
                    placeholder="Добавить новый элемент"
                    aria-label="Добавить новый элемент" 
                    onChange={this.onLabelChange}
                    value={this.state.label}
                    aria-describedby="basic-addon2"/>

                    <div className="input-group-append">
                        <button className="btn btn-primary input-group-text" 
                        id="basic-addon2">Add</button>
                    </div>
                </div>
            </form>
        );
    }
}