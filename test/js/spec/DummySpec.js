"use strict";

var _lib = require("../../../src/js/lib");

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("hello world");

describe("a first test boilerplate for swarmAnimate functions", function () {

	it("has a dummy add one function", function () {
		expect(_lib2.default.addOneTest(1)).toEqual(2);
	});
});
