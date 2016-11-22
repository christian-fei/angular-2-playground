/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodosService } from './todos.service';

xdescribe('TodosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosService]
    });
  });

  it('should ...', inject([TodosService], (service: TodosService) => {
    expect(service).toBeTruthy();
  }));
});
