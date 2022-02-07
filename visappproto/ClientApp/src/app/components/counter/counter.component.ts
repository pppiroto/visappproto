import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  @HostBinding('class') class = 'tile';
  
  public incrementCounter() {
    this.currentCount++;
  }
}
