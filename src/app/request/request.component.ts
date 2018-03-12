import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  @Output() processedRequest = new EventEmitter<number>();
  private is_processed: boolean;

  constructor() {
    this.is_processed = false;
  }

  ngOnInit() {
  }

  onSubmit(): void {
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

}
