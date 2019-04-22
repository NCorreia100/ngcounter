import { Component } from '@angular/core';
import { Counter } from './counter';
import { createRouterScroller } from '@angular/router/src/router_module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nuno-Mohan-Counter Application';
  constructor(){
  }
  ngOnInit(){}
  
}
