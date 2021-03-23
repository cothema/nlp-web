import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ISyllable } from '../../../@sdk/nlp/phonetics/model/i-syllable';
import { IToken } from '../../../@sdk/shared/model/i-token';
import { SyllableTokenizerService } from '../../../@sdk/nlp/phonetics/tokenizer/syllable-tokenizer.service';

@Component({
  selector: 'app-train-syllables',
  templateUrl: './train-syllables.component.html',
  styleUrls: ['./train-syllables.component.scss']
})
export class TrainSyllablesComponent implements OnInit {

  @ViewChild('answerElement') answerElement: ElementRef;
  trainWords = [
    'chobot',
    'škola',
    'abeceda',
    'princezna',
    'moře',
    'výhoda',
    'liška',
    'spolužačka',
    'kráska',
    'zvířátko',
    'kamarádka'
  ];
  answer: number;
  isAnswerCorrect: boolean;
  submitted = false;
  actualWord: {
    answerSyllables?: IToken<ISyllable>[];
    answerSyllablesOrig?: IToken<ISyllable>[];
    string: string;
    correctAnswer?: number;
  };

  constructor(
    private syllableTokenizerService: SyllableTokenizerService,
  ) {

  }

  ngOnInit(): void {
    this.onNextQuestion();
  }

  async onSubmitAnswer() {
    if (!this.answer) {
      return;
    }
    this.submitted = true;
    this.isAnswerCorrect = undefined;

    await this.solve();

    const correctAnswer = this.actualWord.answerSyllables.length;

    this.isAnswerCorrect = (this.answer === correctAnswer);
  }

  onNextQuestion() {
    this.submitted = false;
    this.actualWord = {
      string: this.trainWords[Math.floor(Math.random() * this.trainWords.length)]
    };
    this.isAnswerCorrect = undefined;
    this.answer = undefined;
    setTimeout(() => {
      this.answerElement.nativeElement.focus();
    }, 0);
  }

  private async solve() {
    const solution = await this.syllableTokenizerService.tokenizeWithOrig(this.actualWord.string, 'cs');
    this.actualWord.answerSyllables = solution.syllables;
    this.actualWord.answerSyllablesOrig = solution.syllablesOrig;
  }

}
