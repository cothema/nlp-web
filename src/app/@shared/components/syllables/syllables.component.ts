import { Component, Input, OnInit } from '@angular/core';
import { ISyllable } from '../../../@sdk/nlp/phonetics/model/i-syllable';
import { IToken } from '../../../@sdk/shared/model/i-token';
import { ColorGenerator } from '../../helpers/color-generator';

@Component({
  selector: 'app-syllable',
  templateUrl: './syllables.component.html',
  styleUrls: ['./syllables.component.scss']
})
export class SyllablesComponent implements OnInit {
  @Input() syllables: IToken<ISyllable>[];
  @Input() syllablesOrig: IToken<ISyllable>[];
  colors: string[] = [];

  constructor() {
    this.colors = ColorGenerator.getHappyColors();
  }

  ngOnInit(): void {
  }

}
