import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        submitTime: function(timeElapsed) {
            var timeLog = this.get('store').createRecord('timelog', {
                elapsedtime: timeElapsed
                //createdAt: '2017-08-27T22:50:36.137Z'
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
