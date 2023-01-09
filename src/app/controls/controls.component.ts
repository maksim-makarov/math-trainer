import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GameServiceService } from '../services/game-service.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent implements OnInit {
  constructor(private gameService: GameServiceService) {}

  timeOutForm!: FormGroup;
  pcScore: number = 0;
  playerScore: number = 0;
  gameOn: boolean = false;

  ngOnInit(): void {
    this.timeOutForm = new FormGroup({
      gameTimeOut: new FormControl('1000', Validators.required),
    });
  }

  ngDoCheck() {
    this.pcScore = this.gameService.pcScore;
    this.playerScore = this.gameService.playerScore;
    this.gameOn = this.gameService.gameOn;
  }

  onSubmit(form: FormGroup) {
    this.gameService.startGame(form.value.gameTimeOut);
    this.gameService.gameOn = true;
  }
}
