import { Injectable } from '@angular/core';
import { AbstractClassifierService } from '../../../shared/classifier/abstract-classifier.service';
import { ApiService } from '../../../shared/services/api.service';
import { IWord } from '../../orthography/model/i-word';

@Injectable({
  providedIn: 'root',
})
export class VerbalTypeClassifierService extends AbstractClassifierService<IWord> {

  protected apiSubPath = '/lexicology/classifier/verbal-type';

  constructor(
    protected apiService: ApiService,
  ) {
    super(apiService);
  }

}
