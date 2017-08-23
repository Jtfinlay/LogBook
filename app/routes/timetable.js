import Ember from 'ember';

let times = [{
    timestamp: '1503461789441',
    elapsedTime: '56000',
  }, {
    timestamp: '1503458258870',
    elapsedTime: '2000',
  }, {
    timestamp: '1503375443983',
    elapsedTime: '120000',
  }];

export default Ember.Route.extend({
    model() {
        return times;
    }
});
