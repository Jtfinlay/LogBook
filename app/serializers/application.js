import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    serialize(snapshot, options) {
        var json = this._super(...arguments);
        return json;
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        for (var index = 0; index < payload.data.length; ++index)
        {
            let data = payload.data[index];
            payload.data[index] = {attributes: data};
            payload.data[index].id = data.id;
            payload.data[index].type = "timelog";
        }
        
        let json = this._super(...arguments);
        return json;
    },
    keyForAttribute(attr, method) {
        return attr;
    }
});
