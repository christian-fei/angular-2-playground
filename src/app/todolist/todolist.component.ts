import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { TodosService } from '../todos.service';

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todos = [];

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.todosService.getTodos().subscribe(todos => this.todos = todos);
  }

}
