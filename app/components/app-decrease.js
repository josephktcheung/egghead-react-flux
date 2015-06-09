var React = require('react');
var AppActions = require('../actions/app-actions.js');

var Decrease = React.createClass({
  handler: function() {
    AppActions.decreaseItem(this.props.index);
  },
  render: function() {
    return (
      <button onClick={this.handler}>-</button>
    );
  }
});

module.exports = Decrease;