import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent implements OnInit {
  constructor() {}

  timeOutForm!: FormGroup;

  ngOnInit(): void {
    this.timeOutForm = new FormGroup({
      gameTimeOut: new FormControl('1', Validators.required),
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.value.gameTimeOut);
    console.log(form);
  }
}
