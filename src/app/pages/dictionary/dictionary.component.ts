import { Component, OnInit } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons/faLanguage';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  faLanguage = faLanguage;
  formModel = {
    text: '',
  };
  private submitted = false;
  private apiResponse: any;

  constructor(
    private apiService: ApiService,
  ) {
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.submitted = true;

    this.apiResponse = await this.apiService.analyzeText(this.formModel.text);
  }
}
