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
  private question_ids: number[];
  private questions: Question[];

  constructor(private questionService: QuestionService) {
    this.question_ids = [1];
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
        this.question_ids.push(question_id);
      });
  }

}
