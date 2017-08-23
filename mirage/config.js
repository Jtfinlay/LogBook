export default function() {
    this.namespace = "/api";

    this.get('/timelogs', function() {
        return {
            data: [{
                id: '0',
                type: 'timelogs',
                attributes: {
                    timestamp: '1503461789441',
                    elapsedtime: '56000'
                }
            }, {
                id: '1',
                type: 'timelogs',
                attributes: {
                    timestamp: '1503458258870',
                    elapsedtime: '2000'
                }
            }, {
                id: '2',
                type: 'timelogs',
                attributes: {
                    timestamp: '1503375443983',
                    elapsedtime: '120000'
                }
            }]
        };
    });
}