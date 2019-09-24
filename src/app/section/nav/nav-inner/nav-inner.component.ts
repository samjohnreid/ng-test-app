import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-inner',
  templateUrl: './nav-inner.component.html',
  styleUrls: ['./nav-inner.component.css']
})
export class NavInnerComponent implements OnInit {

  @Input() ParentData: string;

  @Output() childEvent = new EventEmitter;

  onChange(value) {
    this.childEvent.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
