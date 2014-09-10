import Ember from 'ember';

var Router = Ember.Router.extend({
  location: WorkshopENV.locationType
});

Router.map(function () {
  this.resource('pony', {
  }, function() {
    this.route('add');
  });
});

export default Router;
