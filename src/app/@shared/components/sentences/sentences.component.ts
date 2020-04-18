import { Component, Input, OnInit } from '@angular/core';
import { ISentence } from '../../../@sdk/nlp/orthography/model/i-sentence';
import { WordTokenizerService } from '../../../@sdk/nlp/orthography/tokenizer/word-tokenizer.service';
import { IToken } from '../../../@sdk/shared/model/i-token';

@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.scss']
})
export class SentencesComponent implements OnInit {

  private _sentences: IToken<ISentence>[];

  constructor(
    private wordTokenizerService: WordTokenizerService,
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.loadSentencesInfo();
  }

  @Input('sentences')
  set sentences(value: IToken<ISentence>[]) {
    this._sentences = value;
    this.loadSentencesInfo();
  }

  get sentences() {
    return this._sentences;
  }

  async loadSentencesInfo() {
    if (this.sentences) {
      for (const sentence of this._sentences) {
        if (sentence.fragment.words === undefined) {
          sentence.fragment.words = await this.wordTokenizerService.tokenize(sentence.fragment.string);
        }
      }
    }
  }

}
