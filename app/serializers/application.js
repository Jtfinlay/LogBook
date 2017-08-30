import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    serialize( ) {
        var json = this._super(...arguments);
        return json;
    },
    normalizeResponse(store, primaryModelClass, payload) {
        payload.data = [];
        for (var index = 0; index < payload.length; ++index)
        {
            let data = payload[index];
            payload.data[index] = {
                attributes: data,
                id: data.id,
                type: "timelog"
            };
        }
        return this._super(...arguments);
    },
    keyForAttribute(attr) {
        return attr;
    }
});
