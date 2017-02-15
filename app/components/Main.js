var React = require('react');
var ReactDOM = require('react-dom');

var CounterDisplay = React.createClass({
  render: function () {
    return (
      <div>
        <div>{this.props.counterProp}</div>
        <button onClick={this.props.incrementCounter}>+</button>
        <button onClick={this.props.decrementCounter}>-</button>
      </div>
    );
  }
})

var Counter = React.createClass({
  getInitialState: function () {
    return {
      counter: 0
    }
  },

  handleIncrement: function () {
    this.setState({counter: this.state.counter + 1});
  },

  handleDecrement: function() {
    this.setState({counter: this.state.counter - 1});
  },

  render: function() {
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
});

ReactDOM.render(<Counter name="Counter Display" />, document.getElementById('app'));
