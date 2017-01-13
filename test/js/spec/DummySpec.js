import swarmAnimate from 'lib';

console.log("hello world");

describe("a first test boilerplate for swarmAnimate functions", function () {

	it("has a dummy add one function", function () {
		expect(swarmAnimate.addOneTest(1)).toEqual(2);
	});

});
