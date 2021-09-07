import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent {

  @Input() seconds: number = 0;
  @Output() complete: EventEmitter<any>=new EventEmitter();
  @Output() progress: EventEmitter<number>=new EventEmitter();
  intervalId: any;

  constructor() {
    this.intervalId = setInterval(()=>  this.tick(), 1000);
   }

  private tick(): void{
    if(--this.seconds < 1){
      clearInterval(this.intervalId);
      this.complete.emit(null);
    }
    this.progress.emit(this.seconds);
  }

}
