import { Injectable } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ISyllable } from '../model/i-syllable';
import { AbstractTokenizerService } from '../../../shared/tokenizer/abstract-tokenizer.service';

@Injectable({
  providedIn: 'root',
})
export class SyllableTokenizerService extends AbstractTokenizerService<ISyllable> {

  protected apiSubPath = '/phonetics/tokenizer/syllables';

  constructor(
    apiService: ApiService,
  ) {
    super(apiService);
  }

}
