import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Question } from './question';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { environment } from '../environments/environment';
// import { MessageService } from './message.service';

@Injectable()
export class QuestionService {

  private requeteID: number;

  constructor(private httpClient: HttpClient) {
    this.requeteID = 1;
    //TODO: Changer ça pour que chaque nouvelle requête soit nouvelle (sinon, ça peut boguer)
  }

  getRequeteID() {
    return this.requeteID;
  }

  getNouvRequete(description_cas: string, client_id: number): number {
    const params = new HttpParams()
      .set("cid", String('1'))
      .set("description_cas", description_cas);
    const options = { params };
    this.httpClient
      .get<number>(environment.api_endpoint +'/juridico/api/nouv_requete', options)
      .toPromise()
      .then(data => {
        console.log("Requete id (pt1):" + data['requete_id']);
        this.requeteID = data['requete_id'];
      })
      .catch(this.handleError);

    console.log("Requete id (pt2):" + this.requeteID);

    return this.requeteID;
  }

  getQuestion(question_id: number): Promise<Question> {
    // question19: text
    // question1: list
    // question3: date
    return this.httpClient
      .get<Question>(environment.api_endpoint + '/juridico/api/questions' + question_id)
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
      .get<number>(environment.api_endpoint + '/juridico/api/next_question', options)
      .toPromise()
      .catch(this.handleError);
  }

  handleError(error: HttpErrorResponse): Promise<any> {
    return Promise.reject(error);
  }
}
