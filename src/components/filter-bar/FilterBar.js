import React, { Component } from 'react';

import './filter-bar.css';

export default class FilterBar extends Component {
    buttons = [
        {label: 'all', name: 'all', },
        {label: 'active', name: 'active', },
        {label: 'done', name: 'done', },
    ];

    render () {
        const {filterName, onFilterChange} = this.props;

        const buttons = this.buttons.map(({label, name}) => {
            const isActive = filterName === name;
            let activeClass = 'btn-outline-secondary';

            if (isActive) {
                activeClass = 'btn-info';
            }

            return (
                <button 
                key={name}
                className={`btn ${activeClass}`}
                onClick={() => onFilterChange(name)}
                type="button">{label}</button>
            )
        });

        return (
        <div className="filter-bar">
            {buttons}
        </div>
        );
    }
  }
  
  

