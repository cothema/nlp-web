import { Component, Input, OnInit } from '@angular/core';
import { ISentence } from '../../../@sdk/nlp/orthography/model/i-sentence';
import { IToken } from '../../../@sdk/shared/model/i-token';

@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.scss']
})
export class SentencesComponent implements OnInit {

  @Input() sentences: IToken<ISentence>[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
