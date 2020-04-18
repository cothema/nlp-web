import { LexicologyVerbalType } from '../../lexicology/enums/LexicologyVerbalType';

export interface IWord {
  type: 'word';
  string?: string;
  pronunciation?: string;
  verbalType?: {
    type?: LexicologyVerbalType,
    lang?: string,
    probability?: number, // 0 - 1 (1 means 100%)
    details?: any,
  }[];
}
