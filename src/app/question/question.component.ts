import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ReponseService } from '../reponse.service';
import { Reponse } from '../reponse';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() idx: number;
  private _question: Question;
  private _error: boolean;
  private _error_type: string;
  private _question_id: number;
  private _submitted: boolean;

  constructor(
    private questionService: QuestionService,
    private reponseService: ReponseService
  ) { }

  ngOnInit() {
    this.error = false;
    // -1 for not set (not in the range of HTTP status codes)
    this.error_type = '';
    this.question_id = 1;
    this.submitted = false;
    this.getQuestion();
  }

  getQuestion(): void {
    this.questionService.getQuestion(this.idx).then(
      question => this.question = {
        qid: question['qid'],
        nom: question['nom'],
        question: question['question'],
        reponse_type: question['reponse_type'],
        options: question['options'],
        answer: null
      })
      .catch(error => this.handleError(error));
  }

  handleError(error: HttpErrorResponse): void {
    this._error = true;
    if (error.status === 404) {
      this.error_type = '404';
    } else if (error.statusText === 'Unknown Error') {
      // Suposedly can't connect to server.
      // TODO:  Check that other errors don't do that
      this.error_type = 'cannot_reach_server';
    } else {
      this.error_type = 'default';
    }
    console.log(error);
    // this.error_code = error.status;
  }

  onSubmit(): void {
    this.submitted = true;
    const reponse: Reponse = {
      question: this.question.qid,
      requete: 1,
      reponse: this.question.answer
    };
    let reponse_saved;
    let this_error;
    this.reponseService.saveReponse(reponse)
    .then(
      data => reponse_saved = data,
      error => this_error = error
    );
    const a = 1;
  }

  public get question(): Question {
    return this._question;
  }

  public set question(question: Question) {
    this._question = question;
  }


  public get error(): boolean {
    return this._error;
  }

  public set error(value: boolean) {
    this._error = value;
  }


  public get error_type(): string {
    return this._error_type;
  }

  public set error_type(value: string) {
    this._error_type = value;
  }


  public get submitted(): boolean {
    return this._submitted;
  }

  public set submitted(value: boolean) {
    this._submitted = value;
  }


  public get question_id(): number {
    return this._question_id;
  }

  public set question_id(value: number) {
    this._question_id = value;
  }

}
