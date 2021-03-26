import { IToken } from "../../../shared/model/i-token";
import { IWord } from "./i-word";

export interface ISentence {
  type: "sentence";
  string?: string;
  sentenceType?: any;
  words?: IToken<IWord>[];
}
