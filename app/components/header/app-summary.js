var React = require('react');
var Link = require('react-router-component').Link;

var AppSummary = React.createClass({

  render: function() {
    return (
      <div>
        <Link className="btn btn-success" href="/cart">
          Cart Items: QTY / $COST
        </Link>
      </div>
    );
  }

});

module.exports = AppSummary;