export default class Calculator {

    multiply(number1, number2) {
        if (isNaN(number1) || isNaN(number2))
            throw new Error("Parameters must be number");

        return number1 + number2;
    }
}