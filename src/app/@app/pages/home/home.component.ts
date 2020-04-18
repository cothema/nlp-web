import { Component, OnInit } from '@angular/core';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign';
import { faLanguage } from '@fortawesome/free-solid-svg-icons/faLanguage';
import { ISentence } from '../../../@sdk/nlp/orthography/model/i-sentence';
import { IToken } from '../../../@sdk/shared/model/i-token';
import { SentenceTokenizerService } from '../../../@sdk/nlp/orthography/tokenizer/sentence-tokenizer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faLanguage = faLanguage;
  formModel = {
    text: '',
  };
  submitted = false;
  solutionSentences: IToken<ISentence>[];
  exampleInput = 'Náš syn Honza si včera koupil červený svetr. Zeptali jsme se ho: "Líbí se ti?" Odpověděl, že líbí.';
  devMode = false;
  showStats = true;
  showVerbalTypes = true;
  showPropositionalLogic = false;
  faDollarSign = faDollarSign;

  constructor(
    private sentenceTokenizerService: SentenceTokenizerService,
  ) {

  }

  ngOnInit(): void {
  }

  async onSubmitExample() {
    this.formModel.text = this.exampleInput;

    return this.onSubmit();
  }

  async onSubmit() {
    try {
      this.submitted = true;
      this.solutionSentences = await this.sentenceTokenizerService.tokenize(this.formModel.text);
    } catch (e) {
    } finally {
      this.submitted = false;
    }
  }

  onClear() {
    this.submitted = false;
    this.solutionSentences = undefined;
    this.formModel.text = '';
  }
}
