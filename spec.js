var Reverser = function () {
  return {
    reverse: function () {
      return "";
    }
  };
};

var expect = require("expect.js");

describe("string-reverse", function () {
  var reverser = new Reverser();

  it("should return an empty string when passed an empty string", function () {
    expect(reverser.reverse("")).to.equal("");
  });
});
