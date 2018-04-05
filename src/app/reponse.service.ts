import { Injectable } from '@angular/core';
import { Reponse } from './reponse';

import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Config } from './config';


@Injectable()
export class ReponseService {

  private config: Config;

  constructor(private httpClient: HttpClient) {
    this.config = require('./config.json')
   }

  saveReponse(reponse: Reponse) {
    return this.httpClient
    .post(
      this.config.api_endpoint + '/juridico/api/reponses',
      reponse
    )
    .toPromise();
    // .then(
    //   data => { console.log(data); },
    //   error => { console.log(error); }
    // );
    // .toPromise()
    // .then(data => console.log(data))
    // .catch(error => this.handleError);
  }

  handleError(error: HttpErrorResponse): Promise<any> {
    return Promise.reject(error);
  }

}
