import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article-inner',
  templateUrl: './article-inner.component.html',
  styleUrls: ['./article-inner.component.css']
})
export class ArticleInnerComponent implements OnInit {

  @Input() PData: string;

  @Output() childEvent = new EventEmitter;

  constructor() { }

  onChange(value) {
    this.childEvent.emit(value);
  }

  ngOnInit() {
  }

}
