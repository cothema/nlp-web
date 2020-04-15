import { Component, Input, OnInit } from '@angular/core';
import { ISyllable } from '../../@sdk/nlp/phonetics/model/i-syllable';
import { ColorGenerator } from '../helpers/color-generator';

@Component({
  selector: 'app-syllable',
  templateUrl: './syllable.component.html',
  styleUrls: ['./syllable.component.scss']
})
export class SyllableComponent implements OnInit {
  @Input() syllables: ISyllable[];
  @Input() syllablesOrig: ISyllable[];
  colors: string[] = [];

  constructor() {
    this.colors = ColorGenerator.getHappyColors();
  }

  ngOnInit(): void {
  }

}
