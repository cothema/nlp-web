import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ISyllable } from '../model/i-syllable';

@Injectable({
  providedIn: 'root',
})
export class SyllableTokenizerService {

  private apiSubpath = '/phonetics/tokenizer/syllable';

  constructor(
    private apiService: ApiService,
  ) {
  }

  async tokenize(
    word: string,
    lang: string = 'cs',
  ): Promise<ISyllable[]> {
    const res = await this.apiService.post<ISyllable[]>(
      this.apiSubpath + '/tokenize',
      lang,
      {string: word},
    );

    return res.data;
  }

  async tokenizeWithOrig(
    word: string,
    lang: string = 'cs',
  ): Promise<{
    syllables: ISyllable[],
    syllablesOrig: ISyllable[]
  }> {
    const syllables = await this.tokenize(word, lang);

    const wordChars = Array.from(word);

    const syllablesOrig = [];

    for (const syllable of syllables) {
      syllablesOrig.push(
        // Clone syllable, but change fragment string from original string
        Object.assign(
          {},
          syllable,
          {
            fragment: {
              string: wordChars.slice(
                syllable.origIndex,
                syllable.origIndex + syllable.origLength
              ).join('')
            }
          }) as ISyllable
      );
    }

    return {
      syllables,
      syllablesOrig
    };
  }

}
