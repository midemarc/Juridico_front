import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Question } from './question';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { MessageService } from './message.service';

@Injectable()
export class QuestionService {

  constructor(private httpClient: HttpClient) { }

  getHero(): Promise<Question> {
    // question19: text
    // question1: list
    // question3: date
    return this.httpClient
      .get<Question>('http://localhost:8000/juridico/api/questions1')
      .toPromise()
      .catch(this.handleError);
  }

  handleError(error: HttpErrorResponse): Promise<any> {
    return Promise.reject(error);
  }
}
