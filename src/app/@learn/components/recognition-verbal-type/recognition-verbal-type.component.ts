import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { VerbalTypeClassifierService } from '../../../@sdk/nlp/lexicology/classifier/verbal-type-classifier.service';
import { IWord } from '../../../@sdk/nlp/orthography/model/i-word';

@Component({
  selector: 'app-recognition-verbal-type',
  templateUrl: './recognition-verbal-type.component.html',
  styleUrls: ['./recognition-verbal-type.component.scss']
})
export class RecognitionVerbalTypeComponent implements OnInit {
  faGithub = faGithub;
  formModel = {
    string: '',
  };
  submitted = false;
  apiResponse?: string;
  faExclamationTriangle = faExclamationTriangle;
  solution?: IWord;

  constructor(
    private verbalTypeClassifierService: VerbalTypeClassifierService,
  ) {
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.submitted = true;
    this.solution = await this.verbalTypeClassifierService.classify(this.formModel.string, 'cs');
  }

  onClear() {
    this.submitted = false;
    this.apiResponse = undefined;
    this.formModel.string = '';
  }

}
