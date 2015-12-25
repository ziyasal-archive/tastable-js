import chai from "chai";
import sinon from "sinon";
import Calculator from "./calculator";

chai.should();

describe("Calculator module:", () => {
    let calculator, result = null;
    describe("#sum", () => {

        before(() => {
            calculator = new Calculator();
        });

        it("should throw an `Error` given parameters are not numbers.", ()=> {
            (()=> {
                result = calculator.sum(1, new Object());
            }).should.throw(Error);
        });

        it("should return result when given parameters are numbers.", () => {
            result = calculator.sum(1, 2);
            result.should.equal(1 + 2);
        });
    });
});
