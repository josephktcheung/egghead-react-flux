var React = require('react');
var Link = require('react-router-component').Link;
var AppStore = require('../../stores/app-store.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');

function CartTotals() {
  return AppStore.getCartTotals();
}

var AppSummary = React.createClass({
  mixins: [StoreWatchMixin(CartTotals)],
  render: function() {
    return (
      <div>
        <Link className="btn btn-success" href="/cart">
          Cart Items: {this.state.qty} / ${this.state.total}
        </Link>
      </div>
    );
  }

});

module.exports = AppSummary;