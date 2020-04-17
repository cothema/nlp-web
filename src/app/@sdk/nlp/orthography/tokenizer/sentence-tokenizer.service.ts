import { Injectable } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ISentence } from '../model/i-sentence';
import { AbstractTokenizerService } from '../../../shared/tokenizer/abstract-tokenizer.service';

@Injectable({
  providedIn: 'root',
})
export class SentenceTokenizerService extends AbstractTokenizerService<ISentence> {

  protected apiSubpath = '/orthography/tokenizer/sentence';

  constructor(
    protected apiService: ApiService,
  ) {
    super(apiService);
  }

}
