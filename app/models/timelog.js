import DS from 'ember-data';

export default DS.Model.extend({
    type: DS.attr(),
    timestamp: DS.attr(),
    elapsedtime: DS.attr(),

    timestampReadable: Ember.computed("timestamp", function() {
        return new Date(Number(this.get("timestamp")));
    })
});
