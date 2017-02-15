var React = require('react');
var ReactDOM = require('react-dom');

class CounterDisplay extends React.Component{
  render() {
    return (
      <div>
        <div>{this.props.counterProp}</div>
        <button onClick={this.props.incrementCounter}>+</button>
        <button onClick={this.props.decrementCounter}>-</button>
      </div>
    );
  }

  propTypes: {
    counterProp: React.PropTypes.number.isRequired,
    incrementCounter: React.PropTypes.func.isRequired,
    decrementCounter: React.PropTypes.func.isRequired
  }
}

class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  handleIncrement() {
    this.setState({counter: this.state.counter + 1});
  }

  handleDecrement() {
    this.setState({counter: this.state.counter - 1});
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <CounterDisplay
          counterProp={this.state.counter}
          incrementCounter={this.handleIncrement}
          decrementCounter={this.handleDecrement}
        />
      </div>
    );
  }
};

ReactDOM.render(<Counter name="Counter Display" />, document.getElementById('app'));
