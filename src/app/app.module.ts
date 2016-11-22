import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosService } from './todos.service';
import { TodoComponent } from './todo/todo.component';
import { TodolistComponent } from './todolist/todolist.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodolistComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
