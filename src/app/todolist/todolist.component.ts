import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { TodosService } from '../todos.service';
import { Todo } from '../todo/todo'

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todos : Todo[] = [];

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.todosService.getTodos().subscribe(todos => this.todos = todos);
  }

  completeTodo(todoToComplete: Todo) {
    this.todos = this.todos.map((todo: Todo) => {
      if (todoToComplete === todo) {
        todo.completed = true;
        return todo;
      }
      return todo;
    }); 
  }

}
