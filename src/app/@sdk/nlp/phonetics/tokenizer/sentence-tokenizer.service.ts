import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ISentence } from '../model/i-sentence';
import { AbstractTokenizerService } from './abstract-tokenizer.service';

@Injectable({
  providedIn: 'root',
})
export class SentenceTokenizerService extends AbstractTokenizerService<ISentence> {

  protected apiSubpath = '/phonetics/tokenizer/sentence';

  constructor(
    protected apiService: ApiService,
  ) {
    super(apiService);
  }

}
