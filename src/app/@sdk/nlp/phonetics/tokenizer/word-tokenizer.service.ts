import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { IWord } from '../model/i-word';
import { AbstractTokenizerService } from './abstract-tokenizer.service';

@Injectable({
  providedIn: 'root',
})
export class WordTokenizerService extends AbstractTokenizerService<IWord> {

  protected apiSubpath = '/phonetics/tokenizer/word';

  constructor(
    protected apiService: ApiService,
  ) {
    super(apiService);
  }

}
