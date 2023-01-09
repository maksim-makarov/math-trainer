import { Component, Input, OnInit } from '@angular/core';
import { GameServiceService } from '../services/game-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  constructor(private gameService: GameServiceService) {}

  pcScore: number = 0;
  playerScore: number = 0;

  ngOnInit(): void {}

  restartGame() {
    location.reload();
  }

  ngDoCheck() {
    this.pcScore = this.gameService.pcScore;
    this.playerScore = this.gameService.playerScore;
  }
}
