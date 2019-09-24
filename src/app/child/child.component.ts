import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() PData: number;
  @Input() Saminput: string;

  @Output() samChildEvent = new EventEmitter();


  constructor() {}

  samChange(value) {
    this.samChildEvent.emit(value);
  }

  ngOnInit() {
  }

}
