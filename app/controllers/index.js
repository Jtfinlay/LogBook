import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        submitTime: function(timeElapsed) {
            this.get('store').createRecord('timelog', {
                elapsedTime: timeElapsed
            });
        }
    }
});
