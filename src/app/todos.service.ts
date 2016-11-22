import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todo/todo.model';

@Injectable()
export class TodosService {
  todosUrl = "/assets/todos.json";

  constructor(private http: Http) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get(this.todosUrl)
    .map((res: Response) => res.json())
    .catch((error: Error) => Observable.throw(error));
  }
}