import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Question } from './question';

// import { MessageService } from './message.service';

@Injectable()
export class QuestionService {

  nameQuestion: Question = {
    id: '1',
    text: 'Quel est ton nom ?',
    type: 'text'
  };

  happyQuestion: Question = {
    id: '2',
    text: 'Es-tu heureux ?',
    type: 'bool'
  };

  constructor() { }

  getHero(): Observable<Question> {
    // Todo: send the message _after_ fetching the heroes
    // this.messageService.add('HeroService: fetched heroes');
    return of(this.nameQuestion);
  }
}
