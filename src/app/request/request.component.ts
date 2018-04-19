import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  @Output() processedRequest = new EventEmitter<number>();
  private _is_processed: boolean;
  public requete_texte: string;

  constructor(private questionService: QuestionService) {
    this.is_processed = false;
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.questionService.getNouvRequete(this.requete_texte, 1);

    // setTimeout(this.emit, 1000);
    // await this.delay(1000);
    this.delay(1000).then(
      () => {
        this.processedRequest.emit(-1);
        this.is_processed = true;
      }
    );
  }

  emit(): void {
    this.processedRequest.emit(-1);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public get is_processed(): boolean {
    return this._is_processed;
  }

  public set is_processed(value: boolean) {
    this._is_processed = value;
  }

}
