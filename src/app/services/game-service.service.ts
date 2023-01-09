import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameServiceService {
  constructor() {}

  blocks: { id: number; color: string }[] = [];

  playerScore: number = 0;
  pcScore: number = 0;
  timerId: any;
  gameOn: boolean = false;
  showResult: boolean = false;

  generateBlocks() {
    for (let index = 0; index < 100; index++) {
      let block = { id: index, color: 'blue' };
      this.blocks.push(block);
    }
    return of(this.blocks);
  }

  turnToGreen(id: number) {
    this.blocks[id].color = 'green';
  }

  gameIteration(gameTimeout: number) {
    return new Promise((resolve, reject) => {
      if (this.pcScore > 9) return;
      let filteredBlocks = this.blocks.filter((block) => block.color == 'blue');
      let index = Math.floor(Math.random() * filteredBlocks.length);
      filteredBlocks[index].color = 'yellow';
      setTimeout(() => {
        if (filteredBlocks[index].color == 'yellow')
          resolve((filteredBlocks[index].color = 'red'));
      }, gameTimeout);
    });
  }

  startGame(gameTimeout: number) {
    this.timerId = setInterval(() => {
      this.gameIteration(gameTimeout).then(() => {
        if (this.pcScore == 10) {
          clearInterval(this.timerId);
          this.showResult = true;
        } else this.pcScore++;
      });
    }, gameTimeout);
  }
}
