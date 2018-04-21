import { Component, OnInit, ViewChildren, QueryList, AfterViewChecked } from '@angular/core';

import { Direction, Documentation, Organisation, Result } from '../results';
import { ResultsService } from '../results.service';
import { QuestionService } from '../question.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  private _directions: Direction[];
  private _documentations: Documentation[];
  private _organisations: Organisation[];

  constructor(
    private resultsService: ResultsService,
    private questionService: QuestionService
  ) { }

  public data: Promise<Result[]>;

  @ViewChildren('boiteresultats') boiteresultats: QueryList<any>;

  ngOnInit() {
    console.log('coucou');
    this.data = this.resultsService.getResults(this.questionService.getRequeteID());
    this.data.then(
      data => {
        console.log('salut');
        console.log('data: ' + JSON.stringify(data));
        this.directions = data['directions'];
        this.documentations = data['documentation'];
        this.organisations = data['organisations'];
      },
      error => {
        console.error('efefef');
      }
    );

  }

  ngAfterViewInit() {
    this.boiteresultats.changes.subscribe(this.scrollToResultats)
  }

  scrollToResultats = () => {
    document.getElementById("boiteresultats").scrollIntoView();
  }

  public get directions(): Direction[] {
    return this._directions;
  }

  public set directions(value: Direction[]) {
    this._directions = value;
  }

  public get documentations(): Documentation[] {
    return this._documentations;
  }

  public set documentations(value: Documentation[]) {
    this._documentations = value;
  }

  public get organisations(): Organisation[] {
    return this._organisations;
  }

  public set organisations(value: Organisation[]) {
    this._organisations = value;
  }

}
