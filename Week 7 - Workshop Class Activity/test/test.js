var expect = require("chai").expect;
var request = require("request");
describe("Add Two Numbers", function () {
  var url = "http://localhost:8080/addTwoNumbers/3/5";
  it("returns status 200 to check if api works", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it("returns statusCode key in body to check if api give right result should be 200", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.statusCode).to.equal(200);
      done();
    });
  });
  it("returns the result as number", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.be.a("number");
      done();
    });
  });
  it("returns the result equal to 8", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.equal(8);
      done();
    });
  });
  it("returns the result not equal to 15", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.result).to.not.equal(15);
      done();
    });
  });
});
