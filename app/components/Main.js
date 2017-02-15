var React = require('react');
var ReactDOM = require('react-dom');

var CounterDisplay = React.createClass({
  render: function () {
    return (
      <div>{this.props.counterProp}</div>
    )
  }
})

var Counter = React.createClass({
  getInitialState: function () {
    return {
      counter: 0
    }
  },
  render: function() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <CounterDisplay counterProp={this.state.counter}/>
      </div>
    )
  }
});

ReactDOM.render(<Counter name="Counter Display" />, document.getElementById('app'));
