import Ember from 'ember';

export default Ember.Component.extend({
    lastTimeStamp: 0,
    duration: 0,
    isRunning: false,

    run: function() {
        let self = this;
        let lastTimeStamp = this.get("lastTimeStamp");
        this.set("timerId", Ember.run.later(this, function() {
            let duration = this.get("duration");
            duration += Date.now() - lastTimeStamp;
            self.set('lastTimeStamp', Date.now());
            self.set("duration", duration);
            self.run();
        }, 25));
    },

    actions: {
        start: function() {
            this.set("lastTimeStamp", Date.now());
            this.set("isRunning", true);
            this.run();
        },

        stop: function(reset) {
            let timerId = this.get("timerId");
            Ember.run.cancel(timerId);

            let duration = this.get("duration");
            this.sendAction("updateRecordedTime", duration);
            this.set("isRunning", false);
            this.set("lastTimeStamp", 0);
            if (reset) {
                this.set("duration", 0);
            }
        }
    },

    willDestroyElement: function() {
        var timerId = this.get("timerId");
        Ember.run.cancel(timerId);
    }
});
