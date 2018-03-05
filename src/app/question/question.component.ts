import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question: Question;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion(): void {
    this.questionService.getHero().subscribe(
      question => this.question = question
    );
  }

}
