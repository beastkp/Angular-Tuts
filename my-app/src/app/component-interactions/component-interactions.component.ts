import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-interactions',
  template: `
    <span>{{"HELLO " + name}}</span>
    <button (click)="fireEvent()">Click to fire</button>
  `,
  styles: []
})
export class ComponentInteractionsComponent implements OnInit {

  // @Input() public parentData:any;
  // if you want to use the name with some other name the nuse type aliases
  @Input('parentData') public name:any;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Hey CodeEvolution');
  }
}
