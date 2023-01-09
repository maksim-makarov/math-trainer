import { Component } from '@angular/core';
import { GameServiceService } from './services/game-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private gameService: GameServiceService) {}

  title = 'BlockGame';
  showResult: boolean = false;

  ngDoCheck() {
    this.showResult = this.gameService.showResult;
  }
}
