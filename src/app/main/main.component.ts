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
  creators = [this.createType1, this.createType2, this.createType3];

  ngOnInit(): void {
    // for (let i = 0; i < 100; i++) {
    //   this.createType3();
    // }
  }

  startGame() {
    this.exercises = [];
    this.showStartButton = false;
    this.showResult = false;
    while (this.exercises.length <10) {
      const type = Math.floor(Math.random() * this.creators.length);



      const newExample = this.creators[type]();
      const exists = this.exercises.some(exercise => exercise.expression === newExample.expression);
      if (!exists) {
        this.exercises.push(newExample);
      }
    }
  }

  createType1() {
    let first;
    let second;
    let result: number | null = null
    while (!result) {
      first = Math.floor(Math.random() * 9) + 1;
      second = Math.floor(Math.random() * 9) + 1;
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
      first = Math.floor(Math.random() * 9) + 1;
      second = Math.floor(Math.random() * 9) + 1;
      if ((first - second) > 0) {
        result = first - second
      }
    }
    const expression: string = `${first} - ${second} = `;
    return {expression, result};
  }

  createType3() {
    const first = Math.floor(Math.random() * 99) + 1;
    const firstTens = Math.floor(first / 10);
    const firstOnes = first % 10;
    let result: number | null = null
    let second;
    while (!result) {
      second = Math.floor(Math.random() * 99) + 1;
      const secondTens = Math.floor(second / 10);
      const secondOnes = second % 10;
      if (((firstTens + secondTens < 10) && (firstOnes + secondOnes <10))) {
        result = first + second;
      }
    }

    // console.log(first, firstTens, firstOnes);
    // const secondTens = Math.floor(Math.random() * (9 - (10-firstTens) + 1)) + (10-firstTens);
    // const secondOnes = Math.floor(Math.random() * (9 - (10-firstOnes) + 1)) + (10-firstOnes);
    // console.log(secondTens, secondOnes);
    const expression: string = `${first} + ${second} =`;
    console.log(expression);
    return {expression, result};
  }

  showResultsClick() {
    this.showResult = true;
  }
}
