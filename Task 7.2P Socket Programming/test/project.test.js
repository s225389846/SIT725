const expect = require("chai").expect;
const request = require("request");
const baseUrl = "http://localhost:3000";

describe("GET /api/projects", function () {
  it("should return status 200 and an array of projects", function (done) {
    request.get(`${baseUrl}/api/projects`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      const responseBody = JSON.parse(body);
      expect(responseBody.statusCode).to.equal(200);
      expect(responseBody.data).to.be.an("array");
      done();
    });
  });

  it("should return an empty array when no projects exist", function (done) {
    request.get(`${baseUrl}/api/projects`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      const responseBody = JSON.parse(body);
      expect(responseBody.data).to.be.an("array").that.is.empty;
      done();
    });
  });
});
