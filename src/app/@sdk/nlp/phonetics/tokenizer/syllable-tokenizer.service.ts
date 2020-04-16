import { Injectable } from "@angular/core";
import { ApiService } from "../../../services/api.service";
import { ISyllable } from "../model/i-syllable";
import { AbstractTokenizerService } from "./abstract-tokenizer.service";

@Injectable({
  providedIn: "root",
})
export class SyllableTokenizerService extends AbstractTokenizerService<ISyllable> {

  protected apiSubpath = "/phonetics/tokenizer/syllable";

  constructor(
    apiService: ApiService,
  ) {
    super(apiService);
  }

}
