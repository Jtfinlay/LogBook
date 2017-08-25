import Ember from 'ember';

export default Ember.Component.extend({
    lastTimeStamp: 0,
    duration: 0,
    isRunning: false,

    showSubmitButton: Ember.computed('isRunning', function() {
        return (this.get('duration') > 0 && !this.get('isRunning'));
    }),

    run: function() {
        let self = this;
        let lastTimeStamp = this.get('lastTimeStamp');
        this.set('timerId', Ember.run.later(this, function() {
            let duration = this.get('duration');
            duration += Date.now() - lastTimeStamp;
            self.set('lastTimeStamp', Date.now());
            self.set('duration', duration);
            self.run();
        }, 25));
    },

    actions: {
        start: function() {
            this.set('lastTimeStamp', Date.now());
            this.set('isRunning', true);
            this.run();
        },

        stop: function(reset) {
            let timerId = this.get('timerId');
            Ember.run.cancel(timerId);

            let duration = this.get('duration');
            this.sendAction('updateRecordedTime', duration);
            this.set('isRunning', false);
            this.set('lastTimeStamp', 0);
            if (reset) {
                this.set('duration', 0);
            }
        },

        submit: function() {
            let timeElapsed = this.get('duration');
            this.get('onSubmit')(timeElapsed);
        }
    },

    willDestroyElement: function() {
        var timerId = this.get('timerId');
        Ember.run.cancel(timerId);
    }
});
