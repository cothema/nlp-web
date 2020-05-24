import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { MathJaxModule } from 'ngx-mathjax';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SentenceWordsComponent } from './components/sentence-words/sentence-words.component';
import { SentencesComponent } from './components/sentences/sentences.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SyllablesComponent } from './components/syllables/syllables.component';
import { WordComponent } from './components/word/word.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    FontAwesomeModule,
    NgxJsonViewerModule,
    NgbTooltipModule,
    MathJaxModule.forChild()
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    FontAwesomeModule,
    NgxJsonViewerModule,
    SpinnerComponent,
    SyllablesComponent,
    NgbTooltipModule,
    SentencesComponent,
    WordComponent,
    SearchBoxComponent
  ],
  entryComponents: [],
  providers: [],
  declarations: [
    SpinnerComponent,
    SyllablesComponent,
    SentencesComponent,
    SentenceWordsComponent,
    WordComponent,
    SearchBoxComponent
  ],
})
export class SharedModule {
}
