import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Direction, Documentation, Result, Tag, TagType, Organisation } from './results';

import { environment } from '../environments/environment';

@Injectable()
export class ResultsService {

  private requeteID: number;

  constructor(private httpClient: HttpClient) {
    this.requeteID = 1;
    //TODO: Changer ça pour que chaque nouvelle requête soit nouvelle (sinon, ça peut boguer)
  }

  getResults(): Promise<Result[]> {
    const params = new HttpParams()
      .set('reqid', String(this.requeteID));
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
