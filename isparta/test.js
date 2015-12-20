import chai from "chai";
import sinon from "sinon";
import Calculator from "./calculator";

chai.should();

describe("Calculator module:", () => {
    let calculator, result = null;
    describe("#multiply", () => {
        before(() => {
            calculator = new Calculator();
        });
        it("should throw an `Error` given parameters is not number", ()=> {
            (()=> {
                result = calculator.multiply(1, new Object());
            }).should.throw(Error);
        });

        it("should return result when given parameters is a number.", () => {
            result = calculator.multiply(1, 2);
            result.should.equal(1 + 2);
        });
    });
});
