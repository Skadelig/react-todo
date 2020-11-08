import React, { Component } from 'react';

import './App.css';

import AppHeader from '../AppHeader';
import SearchBar from '../SearchBar/SearchBar';
import TodoList from '../TodoList/TodoList';
import TodoItemAdd from '../TodoItemAdd/TodoItemAdd';
import FilterBar from '../filter-bar/FilterBar';

export default class App extends Component {
  state = {
    todoData:  [
      this.createItem('learn React', 1),
      this.createItem('Visit Boskh exhibition', 2),
      this.createItem('Buy food', 3),
    ],
    searchWord: '',
    activeFilter: 'all', //active , done all
  }

  createItem(label, id) {
    return {
      label,
      important: false,
      done: false,
      id,
    };
  };

  createItemId() {
    const arrLengh = this.state.todoData.length - 1;

    return this.state.todoData[arrLengh].id +1;
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const result = [
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: result
      };
    });
  };

  addItem = (text) => {
    this.setState(({ todoData }) => {
      const result = [ ...todoData, this.createItem(text, this.createItemId())];

      return {
        todoData: result
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName] };
  
    return [
      ...arr.slice(0, idx), 
      newItem,
      ...arr.slice(idx + 1)
    ];
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => { 
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      }
    });
  };

  onToggleImportant = (id) => {
    this.setState(({todoData}) => { 
      return {
        todoData: this.toggleProperty(todoData, id, 'important'),
      }
    });
  };

  searchText = (text) => {
    this.setState(() => {
      return {
        searchWord: text,
      }
    });
  };
  
  search(data, searchWord) {
    return data.filter((el) => el.label.includes(searchWord));
  }

  filterTodoList(todoList, filter) {
    if (filter === 'active') {
      return todoList.filter(el => !el.done);
    }

    if (filter === 'done') {
      return todoList.filter(el => el.done);
    }

    return todoList;
  }

  onFilterChange = (name) => {
    this.setState(() => {
      return {
        activeFilter: name,
      }
    });
  }

  render() {
    const {todoData, searchWord, activeFilter} = this.state;
    const visibleItems = this.filterTodoList(this.search(todoData, searchWord), activeFilter);
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <section>
        <AppHeader more={todoCount} done={doneCount}/>
        <SearchBar onSearchedText={this.searchText}/>
        <FilterBar filterName={activeFilter}
          onFilterChange={this.onFilterChange}
        />
        
        <TodoList todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <TodoItemAdd onItemAdded={this.addItem}/>
      </section>);
  }
}

