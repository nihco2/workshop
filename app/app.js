import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'workshop',
  Resolver: Resolver,
  rootElement:'#ember-app',
  ready: function() {
    this.devTools.globalize();
  }
});

loadInitializers(App, 'workshop');

export default App;
