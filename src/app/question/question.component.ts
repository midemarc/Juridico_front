import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  private question: Question;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion(): void {
    this.questionService.getHero().subscribe(
      question => this.question = {
        qid: question['qid'],
        nom: question['nom'],
        question: question['question'],
        reponse_type: question['reponse_type'],
        options: question['options'],
        answer: null
      }
    );
  }

}
