import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://apilogbook.azurewebsites.net',
    namespace: 'tables',
    headers: {
        'ZUMO-API-VERSION': '2.0.0'
    }
});
