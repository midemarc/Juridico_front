import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { SuiModule } from 'ng2-semantic-ui';


import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from './question.service';
import { ReponseService } from './reponse.service';
import { InterfaceComponent } from './interface/interface.component';
import { ResultsComponent } from './results/results.component';
import { ResultsService } from './results.service';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    InterfaceComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SuiModule,
  ],
  providers: [
    QuestionService,
    ReponseService,
    ResultsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
