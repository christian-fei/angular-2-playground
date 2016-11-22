import { Component, Input, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() data: Todo;

  constructor() { }

  ngOnInit() {
  }

}
