import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../services/game-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private gameService: GameServiceService) {}

  blocks: { id: number; color: string }[] = [];

  click(event: any): void {
    if (event.target.className !== 'block') return;
    else {
      if (event.target.style.backgroundColor !== 'yellow') return;
      else {
        this.gameService.turnToGreen(event.target.id);
        this.gameService.playerScore++;
        if (this.gameService.playerScore === 10) {
          clearInterval(this.gameService.timerId);
          this.gameService.showResult = true;
        }
      }
    }
  }

  ngOnInit(): void {
    this.gameService.generateBlocks().subscribe((blocks) => {
      this.blocks = blocks;
    });
  }
}
