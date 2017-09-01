export default function() {
    this.namespace = "/api";

    this.get('https://apilogbook.azurewebsites.net/tables/timelogs', function() {
        return [{
                "timestamp": 1503461789441,
                "elapsedtime": 356000,
                "id": "70257a51-bda4-4ce0-9c8b-7e68644c301f",
                "createdAt": "2017-08-27T22:50:36.137Z",
                "updatedAt": "2017-08-27T22:50:36.137Z",
                "deleted": false
            },
            {
                "timestamp": 1503458258870,
                "elapsedtime": 23000,
                "id": "ab912f38-09e0-4e63-aad9-f696aeb33c97",
                "createdAt": "2017-08-27T22:50:36.137Z",
                "updatedAt": "2017-08-27T22:50:36.137Z",
                "deleted": false
            }];
    });
}