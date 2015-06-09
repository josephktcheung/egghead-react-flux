var React = require('react');
var AppActions = require('../actions/app-actions.js');

var Increase = React.createClass({
  handler: function() {
    AppActions.increaseItem(this.props.index);
  },
  render: function() {
    return (
      <button onClick={this.handler}>+</button>
    );
  }
});

module.exports = Increase;