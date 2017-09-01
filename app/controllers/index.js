import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        submitTime: function(timeElapsed) {
            var timeLog = this.get('store').createRecord('timelog', {
                elapsedtime: timeElapsed
            });
            function success(post) {
                console.log('success');
            }
            function failure(reason) {
                console.log('failure');
            }
            timeLog.save().then(success).catch(failure);
        }
    }
});
