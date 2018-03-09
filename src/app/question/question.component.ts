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
  private question: Question;
  private error: boolean;
  private error_type: string;
  private question_id: number;
  private submitted: boolean;

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
    this.error = true;
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

}
