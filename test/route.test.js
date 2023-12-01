const request = require('supertest')
let server

describe('ROUTE TEST', () => {

    beforeAll(() => {
        server = require('../server')
    })

    afterAll(() => {
        server.close()
    })

    describe('GET TRY', () => {
        it('Should return status 200', async () => {
            const response = await request(server).get('/')
            expect(response.status).toBe(200)
        })

        it('Should return status 501', async () => {
            const response = await request(server).get('/vhghgfhjfghfghdgh')
            expect(response.status).toBe(501)
        })
    })

    describe('POST TRY', () => {
        it('Should return status 201', async () => {
            const response = await request(server).post('/user')
            expect(response.status).toBe(201)
        })       
    })

})