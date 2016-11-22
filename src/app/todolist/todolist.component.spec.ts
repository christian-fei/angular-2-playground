/* tslint:disable:no-unused-variable */
import { Observable } from 'rxjs';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, ConnectionBackend } from '@angular/http';

import { TodosService } from '../todos.service';
import { TodolistComponent } from './todolist.component';
import { TodoComponent } from '../todo/todo.component';
import { Todo } from '../todo/todo.model';


let testTodo: Todo = new Todo('test todo', false);

class FakeTodosService {
  getTodos(): Observable<Todo[]> {
    return Observable.of([testTodo]);
  }
}

describe('TodolistComponent', () => {
  let element: Element;
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;
  let todosService: FakeTodosService;

  beforeEach(async(() => {
    todosService = new FakeTodosService();
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule
      ],
      providers: [
        {provide: TodosService, useValue: todosService}
      ],
      declarations: [ TodoComponent, TodolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('creates component', () => {
    expect(component).toBeTruthy();
  });
});
