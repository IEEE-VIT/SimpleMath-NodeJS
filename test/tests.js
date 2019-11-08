const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const assert = require("assert");
const should = chai.should();

chai.use(chaiHttp);

describe("----------START TEST FOR app.js----------", () => {
  it("Checks if the App is working", done => {
    chai
      .request(app)
      .get("/math/check")
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.text.should.equal("Congratulations! Your app works! :)");
          done();
        }
      });
  });

  it("Checks the POST /math/power", done => {
    chai
      .request(app)
      .post("/math/power")
      .send({ param1: 3, param2: 2 })
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.body.result.should.be.a("number");
          res.body.meta.success.should.be.a("boolean");
          res.body.meta.message.should.be.a("string");
          res.body.meta.code.should.be.a("number");

          res.body.result.should.equal(9);

          done();
        }
      });
  });

  it("Checks the POST /math/power", done => {
    chai
      .request(app)
      .post("/math/factorial")
      .send({ param1: 5 })
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.body.result.should.be.a("number");
          res.body.meta.success.should.be.a("boolean");
          res.body.meta.message.should.be.a("string");
          res.body.meta.code.should.be.a("number");

          res.body.result.should.equal(120);

          done();
        }
      });
  });

  it("Checks the POST /math/ceil", done => {
    chai
      .request(app)
      .post("/math/ceil")
      .send({ param1: 1.2 })
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.body.result.should.be.a("number");
          res.body.meta.success.should.be.a("boolean");
          res.body.meta.message.should.be.a("string");
          res.body.meta.code.should.be.a("number");

          res.body.result.should.equal(2);

          done();
        }
      });
  });

  it("Checks the POST /math/floor", done => {
    chai
      .request(app)
      .post("/math/floor")
      .send({ param1: 1.2 })
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.body.result.should.be.a("number");
          res.body.meta.success.should.be.a("boolean");
          res.body.meta.message.should.be.a("string");
          res.body.meta.code.should.be.a("number");

          res.body.result.should.equal(1);

          done();
        }
      });
  });

  it("Checks the POST /math/areaOfCircle", done => {
    chai
      .request(app)
      .post("/math/areaOfCircle")
      .send({ param1: 1 })
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.body.result.should.be.a("number");
          res.body.meta.success.should.be.a("boolean");
          res.body.meta.message.should.be.a("string");
          res.body.meta.code.should.be.a("number");

          res.body.result.should.equal(Math.PI);

          done();
        }
      });
  });

  it("Checks the POST /math/areaOfRectangle", done => {
    chai
      .request(app)
      .post("/math/power")
      .send({ param1: 3, param2: 2 })
      .end((err, res) => {
        if (err) {
          done(err);
          process.exit(1);
        } else {
          res.body.result.should.be.a("number");
          res.body.meta.success.should.be.a("boolean");
          res.body.meta.message.should.be.a("string");
          res.body.meta.code.should.be.a("number");

          res.body.result.should.equal(6);

          done();
        }
      });
  });
});
