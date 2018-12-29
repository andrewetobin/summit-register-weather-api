const pry = require('pryjs')

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');


chai.use(chaiHttp);

describe('/', () => {
    it("getting response from weather", done => {
      chai.request(server)
        .get("/?lat=37.577473&lon=-105.485443")
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body['data'][0].should.have.property('time');
          response.body['data'][0].should.have.property('summary');
          response.body['data'][0].should.have.property('icon');
          response.body['data'][0].should.have.property('temperature');
          response.body['data'].length.should.eq(49);
          done()
        });
    });
  });
