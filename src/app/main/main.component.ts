import { Component, OnInit } from '@angular/core';

// ng build --configuration production --base-href "/math-trainer/"
// npx angular-cli-ghpages --dir=dist/math-trainer

const TYPES = [1,2];

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
    while (this.exercises.length <10) {
      const type = this.getRandomInt(1,4);
      // @ts-ignore
      const newExample = this[`createType${type}`]();
      const exists = this.exercises.some(exercise => exercise.expression === newExample.expression);
      if (!exists) {
        this.exercises.push(newExample);
      }
    }
  }

  getRandomInt(min: number, max: number): number {
    const lower = Math.ceil(min);
    const upper = Math.floor(max);
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
  }

  createType1() {
    let first;
    let second;
    let result: number | null = null
    while (!result) {
      first = this.getRandomInt(1, 9);
      second = this.getRandomInt(1, 9);
      if ((first + second) > 10) {
        result = first + second
      }
    }
    const expression: string = `${first} + ${second} = `;
    return {expression, result};
    }

  createType2() {
    let first;
    let second;
    let result: number | null = null
    while (!result) {
      first = this.getRandomInt(11,19);
      second = this.getRandomInt(1,9);
      const firstOnes = first % 10;
      if ((first - second) > 0 && (second > firstOnes)) {
        result = first - second
      }
    }
    const expression: string = `${first} - ${second} = `;
    return {expression, result};
  }

  createType3() {
    let first;
    let second;
    let result: number | null = null
    while (!result) {
      first = this.getRandomInt(11,99);
      const firstTens = Math.floor(first / 10);
      const firstOnes = first % 10;
      second = this.getRandomInt(11,99);
      const secondTens = Math.floor(second / 10);
      const secondOnes = second % 10;
      if (((firstTens + secondTens < 10) && (firstOnes + secondOnes <10))) {
        result = first + second;
      }
    }
    const expression: string = `${first} + ${second} =`;
    return {expression, result};
  }

  createType4() {
    let first;
    let second;
    let result: number | null = null
    while (!result) {
      first = this.getRandomInt(11,99);
      const firstTens = Math.floor(first / 10);
      const firstOnes = first % 10;
      second = this.getRandomInt(11,99);
      const secondTens = Math.floor(second / 10);
      const secondOnes = second % 10;
      if (((firstTens > secondTens) && (firstOnes > secondOnes))) {
        result = first - second;
      }
    }
    const expression: string = `${first} - ${second} =`;
    return {expression, result};
  }

  showResultsClick() {
    this.showResult = true;
  }
}
