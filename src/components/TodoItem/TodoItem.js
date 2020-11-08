import React, { Component } from 'react';

import './TodoItem.css';

export default class TodoItem extends Component {
    render () {
        const {
            label, 
            onDeleted, 
            onToggleDone, 
            onToggleImportant, 
            done, 
            important } = this.props;

        let classes = '';
        let classNames = 'todo-item';

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classes +=  'importantClass';
        }
        
        return (
            <div className={ classNames }>
                <span onClick={onToggleDone} className={classes}>{label}</span>
                <div className="todo-item-control">
                    <button className="btn btn-outline-danger btn-sm"
                    onClick={onDeleted}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button 
                    onClick={onToggleImportant}
                    className='btn btn-outline-success btn-sm'>
                        <i className="fa fa-exclamation"></i>
                    </button>
                </div>
            </div>
        );
    }
}