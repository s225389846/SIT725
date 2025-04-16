const expect = require("chai").expect;
const request = require("request");
const baseUrl = "http://localhost:3000";

describe("POST /api/form", function () {
  it("should submit form data and return success message", function (done) {
    const formData = {
      firstname: "John",
      lastname: "Doe",
      size: "M",
      color: "Blue",
      email: "john.doe@example.com",
      contact: "1234567890",
    };

    request.post(
      {
        url: `${baseUrl}/api/form`,
        json: formData,
      },
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body.statusCode).to.equal(200);
        expect(body.message).to.equal("Form submitted successfully!");
        done();
      }
    );
  });

  it("should return an error if required fields are missing", function (done) {
    const formData = {
      firstname: "John",
      lastname: "Doe",
      size: "M",
      email: "john.doe@example.com",
    };

    request.post(
      {
        url: `${baseUrl}/api/form`,
        json: formData,
      },
      function (error, response, body) {
        expect(response.statusCode).to.equal(500);
        expect(body.statusCode).to.equal(500);
        expect(body.message).to.include("Error saving form data");
        done();
      }
    );
  });
});
