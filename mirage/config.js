export default function() {
    this.namespace = "/api";

    this.get('/times', function() {
        return {
            data: [{
                type: 'times',
                timestamp: '1503461789441',
                elapsedTime: '56000'
            }, {
                type: 'times',
                timestamp: '1503458258870',
                elapsedTime: '2000'
            }, {
                type: 'times',
                timestamp: '1503375443983',
                elapsedTime: '120000'
            }]
        };
    });
}