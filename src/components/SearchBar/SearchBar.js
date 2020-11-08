import React, { Component } from 'react';

import './SearchBar.css';

export default class SearchBar extends Component {
    state = {
        searchText: ''
    }

    onTextChange = (e) => {
        const searchText = e.target.value;
        this.setState({ searchText });
        this.props.onSearchedText(searchText);
    };

    render() {
        const searchText = 'Please type to here'; 

        return (
            <div className="search-bar input-group">
                <input 
                type="text" 
                className="form-control" 
                placeholder={searchText} 
                aria-label="Recipient's username with two button addons" 
                value={this.state.searchText}
                onChange={this.onTextChange}
                aria-describedby="button-addon4" />
            
            </div>
      )
    }
  };
