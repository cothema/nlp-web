import { Component, Input, OnInit } from '@angular/core';
import { ISentence } from '../../../@sdk/nlp/orthography/model/i-sentence';
import { IToken } from '../../../@sdk/shared/model/i-token';

@Component({
  selector: 'app-sentence-words',
  templateUrl: './sentence-words.component.html',
  styleUrls: ['./sentence-words.component.scss']
})
export class SentenceWordsComponent implements OnInit {

  @Input() sentence: IToken<ISentence>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
