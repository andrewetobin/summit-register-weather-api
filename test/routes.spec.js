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
          // response.body[0].should.have.property('id');
          // response.body[0].should.have.property('name');
          // response.body[0].should.have.property('artist_name');
          // response.body[0].should.have.property('genre');
          // response.body[0].should.have.property('song_rating');
          done()
        });
    });
  });
