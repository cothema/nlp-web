import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons/faWikipediaW';
import { faLanguage } from '@fortawesome/free-solid-svg-icons/faLanguage';
import { ISyllable } from '../../../@sdk/nlp/phonetics/model/i-syllable';
import { SyllableTokenizerService } from '../../../@sdk/nlp/phonetics/tokenizer/syllable-tokenizer.service';
import { ApiService } from '../../../@sdk/services/api.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  faLanguage = faLanguage;
  formModel = {
    text: '',
  };
  isSubmitted = false;
  response: {
    originalString?: string,
    syllables?: ISyllable[],
    syllablesOrig?: ISyllable[]
  } = {};
  faWikipediaW = faWikipediaW;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private syllableTokenizerService: SyllableTokenizerService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.word) {
        this.isSubmitted = true;
        this.response = {};
        this.formModel.text = params.word;
        this.solveRequest();
      }
    });
  }

  async onSubmit() {
    if (this.response.originalString !== this.formModel.text) {
      this.isSubmitted = true;
      this.response = {};
      await this.router.navigate(['/dictionary', this.formModel.text]);
    }
  }

  async solveRequest() {
    this.response.originalString = this.formModel.text;

    const solution = await this.syllableTokenizerService.tokenizeWithOrig(this.formModel.text);

    this.response.syllables = solution.syllables;
    this.response.syllablesOrig = solution.syllablesOrig;
  }
}
