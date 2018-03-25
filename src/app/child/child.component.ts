import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  test = 'test';
  // changeDetection: ChangeDetectionStrategy.OnPush;

  @Input() title;
  @Output() callback = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRender($event) {
    this.callback.emit($event.target.value)
  }

}
