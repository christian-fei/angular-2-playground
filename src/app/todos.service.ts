import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todo/todo';

@Injectable()
export class TodosService {
  todosUrl = "/assets/todos.json";

  constructor(private http: Http) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get(this.todosUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError (error: Response | any) {
    console.log(error);
    return Observable.throw(error);
  }

}
