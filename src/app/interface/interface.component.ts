import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { Question } from '../question';


@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  private _question_ids: number[];
  private questions: Question[];

  constructor() {
    this.question_ids = [0, 7, 4];
  }

  ngOnInit() {
  }


  public get question_ids(): number[] {
    return this._question_ids;
  }

  public set question_ids(value: number[]) {
    this._question_ids = value;
  }

}
