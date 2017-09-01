import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    serialize(snapshot, options) {
        var json = {
            createdAt: snapshot._attributes.createdAt,
            elapsedtime: snapshot._attributes.elapsedtime,
            type: snapshot.modelName
        };
        return json;
    },
    normalizeResponse(store, primaryModelClass, payload) {
        if (payload.length > 0) {
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
        } else {
            payload.data = [{
                attributes: {
                    elapsedtime: payload.elapsedtime,
                    createdAt: payload.createdAt
                },
                id: payload.id,
                type: payload.type
            }];
            delete payload.createdAt;
            delete payload.deleted;
            delete payload.elapsedtime;
            delete payload.id;
            delete payload.startedAt;
            delete payload.type;
            delete payload.updatedAt;
        }
        
        return this._super(...arguments);
    },
    keyForAttribute(attr) {
        return attr;
    }
});
