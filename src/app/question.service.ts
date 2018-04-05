import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Question } from './question';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Config } from './config';
// import { MessageService } from './message.service';

@Injectable()
export class QuestionService {

  private requeteID: number;
  private config: Config;

  constructor(private httpClient: HttpClient) {
    this.requeteID = 1;
    this.config = require('./config.json')
  }

  getQuestion(question_id: number): Promise<Question> {
    // question19: text
    // question1: list
    // question3: date
    return this.httpClient
      .get<Question>(this.config.api_endpoint + '/juridico/api/questions' + question_id)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  getNextQuestionID(previousQuestionAnswerID: number): Promise<number> {
    const params = new HttpParams()
      .set('reqid', String(this.requeteID))
      .set('repid', String(previousQuestionAnswerID))
      .set('id_only', String('1')
    );
    const options = {
      params
    };
    return this.httpClient
      .get<number>(this.config.api_endpoint + '/juridico/api/next_question', options)
      .toPromise()
      .catch(this.handleError);
  }

  handleError(error: HttpErrorResponse): Promise<any> {
    return Promise.reject(error);
  }
}
