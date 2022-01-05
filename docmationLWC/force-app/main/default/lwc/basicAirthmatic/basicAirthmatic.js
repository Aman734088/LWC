import { LightningElement } from 'lwc';

export default class BasicAirthmatic extends LightningElement {
     firstNumber;
    secondNumber;
    resultValue;
    handleNumberOeChange(event) {
        this.firstNumber = parseInt(event.target.value);
    }
    handleNumberTwoChange(event) {
        this.secondNumber = parseInt(event.target.value);
    }
    addition() {
        this.resultValue = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }
    multification() {
        this.resultValue = this.firstNumber * this.secondNumber;
    }
    subtraction() {
        this.resultValue = this.firstNumber - this.secondNumber;
    }
    division() {
        this.resultValue = this.firstNumber / this.secondNumber;
    }
}