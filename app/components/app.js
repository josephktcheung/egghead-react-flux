var React = require('react');
var AppActions = require('../actions/app-actions.js');

var App = React.createClass({
  handler: function() {
    AppActions.addItem('this is the item');
  },
  render: function() {
    return (
      <h1 onClick={this.handler}>MY FLUX APP</h1>
    );
  }

});

module.exports = App;