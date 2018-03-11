import { Component, OnInit } from '@angular/core';

import { Direction, Documentation, Organisation } from '../results';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  private directions: Direction[];
  private documentations: Documentation[];
  private organisations: Organisation[];

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    console.log('coucou');
    this.resultsService.getResults().then(
      data => {
        console.log('salut');
        console.log('data: ' + JSON.stringify(data));
        this.directions = data[0]['directions'];
        this.documentations = data[0]['documentations'];
        this.organisations = data[0]['organisations'];
      },
      error => {
        console.error('efefef');
      }
    );
  }

}
