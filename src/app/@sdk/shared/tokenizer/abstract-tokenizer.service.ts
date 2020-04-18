import { IToken } from '../model/i-token';
import { ApiService } from '../services/api.service';

export abstract class AbstractTokenizerService<T> {

  protected abstract apiSubPath: string;

  protected constructor(
    protected apiService: ApiService,
  ) {
  }

  async tokenize(
    input: string,
    lang: string = 'cs',
  ): Promise<IToken<T>[]> {
    const res = await this.apiService.post<T[]>(
      this.apiSubPath + '/tokenize',
      lang,
      {string: input},
    );

    return res.data;
  }

  async tokenizeWithOrig(
    word: string,
    lang: string = 'cs',
  ): Promise<{
    syllables: IToken<T>[],
    syllablesOrig: IToken<T>[]
  }> {
    const tokens = await this.tokenize(word, lang);

    const wordChars = Array.from(word);

    const syllablesOrig = [];

    for (const token of tokens) {
      syllablesOrig.push(
        // Clone syllables, but change fragment string from original string
        Object.assign(
          {},
          token,
          {
            fragment: {
              string: wordChars.slice(
                token.origIndex,
                token.origIndex + token.origLength
              ).join('')
            }
          }) as IToken<T>
      );
    }

    return {
      syllables: tokens,
      syllablesOrig
    };
  }

}
