import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';
import { Supercounter } from '../supercounter';



@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  myThing = "Awesome";
  counters: Counter[];
  supercounters: Supercounter[];
  countSum=0;


  constructor() { 
    this.counters = [];
    this.supercounters =[];
  }

  ngOnInit() {
  }
  createCounter(){
    const counter = new Counter();
    this.counters.push(counter); 
    if(this.counters.length==6){
      this.counters.forEach(c=>this.countSum+=c.value);
      const supercounter = new Supercounter(this.countSum);
      this.supercounters.push(supercounter);
      this.counters.length=0;
        this.countSum=0;
        // this.playSound();
      }
  }
  playSound(){
      let audio = new Audio();
      audio.src = "../../../assets/smb_powerup.wav";
      audio.load();
      audio.play();
    }
  

}
