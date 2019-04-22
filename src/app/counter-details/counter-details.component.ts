import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter';
import { CounterListComponent } from '../counter-list/counter-list.component'

@Component({
  selector: 'counter',
  templateUrl: './counter-details.component.html',
  styleUrls: ['./counter-details.component.css']
})
export class CounterDetailsComponent implements OnInit {

  @Input()
  counter: Counter;
 
  constructor() { }

  ngOnInit() {
  }
  increment(){
    this.counter.value += 1;
  }
  decrement(){
    this.counter.value -= 1;
  }
  
  
  
 
}
