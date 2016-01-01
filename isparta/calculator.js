export default class Calculator {

    sum(number1, number2) {
        if (isNaN(number1) || isNaN(number2))
            throw new Error("Parameters must be number");

        return number1 + number2;
    }
}