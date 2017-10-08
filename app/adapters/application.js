import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    namespace: 'api',
    host: 'http://localhost:10010',
    headers: {
        "Content-Type": 'application/json'
    }
});
