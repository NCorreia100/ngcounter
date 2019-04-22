import { Component, OnInit, Input } from '@angular/core';
import {Supercounter} from '../supercounter';

@Component({
  selector: 'supercounter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {

   
  constructor() { }
  @Input()
  supercounter: Supercounter;
 

  ngOnInit() {
  }
  increment(){
    this.supercounter.value += 3;
  }
  decrement(){
    this.supercounter.value -= 3;
  }

}
