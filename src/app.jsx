import { Component } from 'react';
import "./app.css";
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0},
    ]
  }
  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        return {...habit, count: habit.count + 1};
      }
      return item;
    })
    this.setState({habits});
  }
  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        const count = habit.count - 1;
        return {...habit, count: count < 0 ? 0 : count};
      }
      return item;
    })
    this.setState({habits});
  }
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(v => v.id !== habit.id);
    this.setState({habits});
  }
  handleAdd = (name) => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
    this.setState({habits});
  }
  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0) {
        return {...habit, count: 0};
      }
      return habit;
    });
    this.setState({habits});
  }
  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.reduce((a, c) => a + c.count, 0)}/>
        <Habits 
          habits={this.state.habits}
          onAdd={this.handleAdd}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    )
  }
}

export default App;
