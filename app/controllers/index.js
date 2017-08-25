import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        submitTime: function(timeElapsed) {
            this.get('store').createRecord('timelog', {
                timestamp: Date.now(),
                timeelapsed: timeElapsed
            });
        }
    }
});
