import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { QuestionService } from '../question.service';
import { Question } from '../question';


@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  private _question_ids: number[];
  private questions: Question[];
  private is_end: boolean;

  constructor(private questionService: QuestionService) {
    this.question_ids = [];
    this.is_end = false;
  }

  ngOnInit() {
  }

  /**
   * Populate a question component that follows the previous answer
   * @param previousQuestionAnswerID ID of the answer to the previous question
   */
  getNextQuestion(previousQuestionAnswerID: number): void {
    console.log('getNextQuestionID() ' + previousQuestionAnswerID);
    this.questionService.getNextQuestionID(previousQuestionAnswerID)
      .then(data => {
        const question_id = data['question_id'];

        // Not a question, end
        if (question_id === -1) {
          this.is_end = true;
        } else {
          this.question_ids.push(question_id);
        }
      });
  }

  public get question_ids(): number[] {
    return this._question_ids;
  }

  public set question_ids(value: number[]) {
    this._question_ids = value;
  }

}
