import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
    type: DS.attr(),
    createdAt: DS.attr('date'),
    elapsedtime: DS.attr('number'),

    timestampReadable: Ember.computed('timestamp', function() {
        return new Date(this.get('timestamp'));
    })
});
