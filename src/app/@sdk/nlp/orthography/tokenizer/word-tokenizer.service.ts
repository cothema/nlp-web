import { Injectable } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { IWord } from '../model/i-word';
import { AbstractTokenizerService } from '../../../shared/tokenizer/abstract-tokenizer.service';

@Injectable({
  providedIn: 'root',
})
export class WordTokenizerService extends AbstractTokenizerService<IWord> {

  protected apiSubpath = '/orthography/tokenizer/word';

  constructor(
    protected apiService: ApiService,
  ) {
    super(apiService);
  }

}
