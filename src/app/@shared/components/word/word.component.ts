import { Component, Input, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { IWord } from '../../../@sdk/nlp/orthography/model/i-word';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {

  @Input() word: IWord;
  faCheck = faCheck;
  faTimesCircle = faTimesCircle;

  constructor() {
  }

  ngOnInit(): void {
  }

}
