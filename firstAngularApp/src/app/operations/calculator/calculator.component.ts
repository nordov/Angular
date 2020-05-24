import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  result = 0;

  clear(){

    this.result = 0;

  }

  addNumbers(num1, num2){

    this.result = Number(num1.value) + Number(num2.value);

  }

  restNumbers(num1, num2){

    this.result = Number(num1.value) - Number(num2.value);

  }

  multiplyNumbers(num1, num2){

    this.result = Number(num1.value) * Number(num2.value);

  }

  divideNumbers(num1, num2){

    this.result = Number(num1.value) / Number(num2.value);

  }

}
