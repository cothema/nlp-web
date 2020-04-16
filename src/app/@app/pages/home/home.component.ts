import { Component, OnInit } from '@angular/core';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign';
import { faLanguage } from '@fortawesome/free-solid-svg-icons/faLanguage';
import { ApiService } from '../../../@sdk/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faLanguage = faLanguage;
  formModel = {
    text: '',
  };
  submitted = false;
  apiResponse: any;
  exampleInput = 'Mladý Honza je už 2 dny doma. Kdo to tu leží na posteli? Martin. Jsi to ty nebo on? Kobylka byla asi v Kobylisech.';
  devMode = false;
  showStats = true;
  showVerbalTypes = true;
  showPropositionalLogic = false;
  faDollarSign = faDollarSign;

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {
  }

  async onSubmitExample() {
    this.formModel.text = this.exampleInput;

    return this.onSubmit();
  }

  async onSubmit() {
    this.submitted = true;

    // this.apiResponse = await this.apiService.analyzeText(this.formModel.text);
  }

  onClear() {
    this.submitted = false;
    this.apiResponse = undefined;
    this.formModel.text = '';
  }
}
