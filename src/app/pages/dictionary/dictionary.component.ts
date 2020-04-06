import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  apiResponse: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.word) {
        this.formModel.text = params.word;
      }
    });
  }

  async onSubmit() {
    this.submitted = true;

    this.apiResponse = await this.apiService.analyzeWord(this.formModel.text);

    await this.router.navigate(['/dictionary', this.formModel.text]);
  }
}
