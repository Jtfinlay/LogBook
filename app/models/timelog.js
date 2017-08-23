import DS from 'ember-data';

export default DS.Model.extend({
    type: DS.attr(),
    timestamp: DS.attr("number"),
    elapsedtime: DS.attr("number"),

    timestampReadable: Ember.computed("timestamp", function() {
        return new Date(this.get("timestamp"));
    })
});
