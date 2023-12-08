const request = require('supertest');

describe('loading express', function () {
    let server; //server

    // start the server for each run
    beforeEach(function () {
        delete require.cache[require.resolve('../server.js')];
        server = require('../server.js');
    });

    // stop the server after each run
    afterEach(function () {
        server.close();
    });

    // test the /users route endpoint
    it('responds to "/api/users/" with json', function (done) {
        request(server)
            .get('/api/users/')
            .set('Accept', 'application/json')

            // verification of the return values
            .expect('Content-Type', /json/)
            .expect(200, done) // integration
    });

    // test the /products endpoint
    it('responds to "/api/products/" with json', function (done) {
        request(server)
            .get('/api/products/')
            .set('Accept', 'application/json')

            // verification of the return values
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});