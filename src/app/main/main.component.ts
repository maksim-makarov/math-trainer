import { Component, OnInit } from '@angular/core';

const TYPES = [1,2,3,4];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

export class MainComponent implements OnInit {
  constructor() {}

  exercises: {expression: string; result: number; usersResult?: number}[] = [];
  showStartButton: boolean = true;
  showResult: boolean = false;

  ngOnInit(): void {
  }

  startGame() {
    this.exercises = [];
    this.showStartButton = false;
    this.showResult = false;
    console.log('initial',this.exercises)
    while (this.exercises.length <10) {
      // const randomNumber = Math.floor(Math.random() * 100) + 1;
      // this.exersises.push(randomNumber);
      // const index = Math.floor(Math.random() * TYPES.length);

      this.exercises.push(this.createType1());
      this.createType1();
    }
    console.log(this.exercises)
  }

  createType1() {
    const first = Math.floor(Math.random() * 10) + 1;
    const second = Math.floor(Math.random() * 10) + 1;
    const result = first + second;
    const expression: string = `${first} + ${second} = `;
    return {expression, result};
    }

  showResultsClick() {
    this.showResult = true;
  }
}
