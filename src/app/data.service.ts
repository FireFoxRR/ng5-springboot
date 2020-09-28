import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
  
export class DataService {

  private goals = new BehaviorSubject<any>(['The anitial goal', 'Another silly life goal']);
  
  constructor() { }
}
