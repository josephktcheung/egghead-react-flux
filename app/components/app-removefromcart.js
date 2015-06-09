var React = require('react');
var AppActions = require('../actions/app-actions.js');

var RemoveToCart = React.createClass({
  handler: function() {
    AppActions.removeItem(this.props.index);
  },
  render: function() {
    return (
      <button onClick={this.handler}>x</button>
    );
  }
});

module.exports = RemoveToCart;