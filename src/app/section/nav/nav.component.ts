import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public ChildData: string;

  @ViewChild('testViewChild', {static: true}) testingViewChildDecorator: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  testingViewChildFunc() {
    console.log(this.testingViewChildDecorator.nativeElement.value);
  }

}
