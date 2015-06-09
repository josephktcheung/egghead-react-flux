var React = require('react');
var AppActions = require('../actions/app-actions.js');
var Catalog = require('./catalog/app-catalog.js');
var Cart = require('./cart/app-cart.js');
var Router = require('react-router-component');
var CatalogDetail = require('./product/app-catalogdetail.js');
var Template = require('./app-template.js');

var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({
  render: function() {
    return (
      <Template>
        <Locations>
          <Location path='/' handler={Catalog} />
          <Location path='/cart' handler={Cart} />
          <Location path='/item/:item' handler={CatalogDetail} />
        </Locations>
      </Template>
    );
  }

});

module.exports = App;