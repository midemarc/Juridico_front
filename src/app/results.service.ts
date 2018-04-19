import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Direction, Documentation, Result, Tag, TagType, Organisation } from './results';

import { environment } from '../environments/environment';

@Injectable()
export class ResultsService {


  constructor(private httpClient: HttpClient) {
  }

  getResults(requeteID: number): Promise<Result[]> {
    const params = new HttpParams()
      .set('reqid', String(requeteID))
      .set('compte_desire_docu', String('5'))
      .set('compte_desire_orgs', String('5'));
    const options = {
      params
    };
    return this.httpClient
      .get<Result>(environment.api_endpoint + '/juridico/api/resultats', options)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  handleError(error: HttpErrorResponse): Promise<any> {
    return Promise.reject(error);
  }
}
