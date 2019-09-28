const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const assert = require('assert');
const should = require('should');

chai.use(chaiHttp);

describe("----------START TEST FOR app.js----------", () => {
    it("Checks if the App is working", (done) => {
        chai.request(app)
        .get("/math/check")
        .end((err, res) => {
            if (err){
                done(err)
                process.exit(1)
            } else {
                res.text.should.equal("Congratulations! Your app works! :)");
                done()
            }
        })
    })

    it("Checks the /add route with both arguments as numbers", (done) => {
        // *Sends post data as JSON, e.g. 
        // {
        //    "x": 5,
        //    "y" : 5
        // }
        
        chai.request(app)
        .post("/math/add")
        .send({'x': 5, 'y': 5})
        .end((err, res) => {
            if (err) {
                done(err)
                process.exit(1)
            } else {
                res.text.should.equal("5 + 5 = 10");
                done();
            }
        })

    })

    it("Checks the /add route with one argument as NaN", (done) => {
        
        chai.request(app)
        .post("/math/add")
        .send({'x': 'a', 'y': 5})
        .end((err, res) => {
            if (err) {
                done(err)
                process.exit(1)
            } else {
                res.text.should.equal("Both arguments must be numbers");
                done();
            }
        })
        
    })

    it("Checks the /add route with only one argument", (done) => {
        
        chai.request(app)
        .post("/math/add")
        .send({'x': 1})
        .end((err, res) => {
            if (err) {
                done(err)
                process.exit(1)
            } else {
                res.text.should.equal("Both arguments must be provided");
                done();
            }
        })
        
    })

})