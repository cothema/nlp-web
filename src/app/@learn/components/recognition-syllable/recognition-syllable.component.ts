import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { ISyllable } from '../../../@sdk/nlp/phonetics/model/i-syllable';
import { SyllableTokenizerService } from '../../../@sdk/nlp/phonetics/tokenizer/syllable-tokenizer.service';

@Component({
  selector: 'app-recognition-syllable',
  templateUrl: './recognition-syllable.component.html',
  styleUrls: ['./recognition-syllable.component.scss']
})
export class RecognitionSyllableComponent implements OnInit {
  faGithub = faGithub;
  formModel = {
    string: '',
  };
  submitted = false;
  apiResponse?: string;
  faExclamationTriangle = faExclamationTriangle;
  solution: { syllables: ISyllable[]; syllablesOrig: ISyllable[] };

  constructor(
    private syllableTokenizerService: SyllableTokenizerService,
  ) {
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.submitted = true;
    this.solution = await this.syllableTokenizerService.tokenizeWithOrig(this.formModel.string, 'cs');
  }

  onClear() {
    this.submitted = false;
    this.apiResponse = undefined;
    this.formModel.string = '';
  }
}
