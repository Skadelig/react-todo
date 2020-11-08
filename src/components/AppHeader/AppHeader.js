import React from 'react';

import './AppHeader.css';

const AppHeader = ({ more, done}) => {
    return (
      <header className="app-header">
        <h1 className="title">My todo list!</h1>
        <div className="card">
          <div className="card-body">
            {more} more todo, {done} done
          </div>
        </div>
      </header>
      );
  };

  export default AppHeader;