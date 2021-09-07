import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent{

  languageCode: string ='es';
  localizedLabelsMap: any = {
    'en' : 'Start timer',
    'es' : 'Comenzar temporizador',
    'fr' : 'Demarrer une sequence',
    'other' : 'Start timer' 
  }

  minutes!: number;
  seconds!: number;
  isPaused!: boolean;
  buttonLabel!: string;


  constructor() {
    this.reset();
    setInterval(() => this.tick(),1000);
   }
   
   reset(){
      this.minutes = 24;
      this.seconds = 59;
      this.buttonLabel = 'Start';
      this.togglePause();
   }

  private tick() {
    if(!this.isPaused) {
      this.buttonLabel = 'Pause';
      if(--this.seconds < 0) {
        this.seconds = 59;
        if(--this.minutes < 0) {
          this.reset();
        }
      }
    }
  }

   togglePause() {
     this.isPaused = !this.isPaused;
     if(this.minutes < 24 || this.seconds < 59) {
       this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
      }
    }

    onCountdownCompleted(): void{
      alert('Time up!')
    }
}
