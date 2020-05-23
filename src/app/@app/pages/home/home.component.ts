import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiMathService } from '../../../@shared/services/api-math.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formModel = {
    text: '',
  };
  isSubmitted = false;
  response: {
    originalRequest?: string,
    output?: string
  } = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiMathService: ApiMathService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.query) {
        this.isSubmitted = true;
        this.response = {};
        this.formModel.text = params.query;
        this.solveRequest(params.query);
      }
    });
  }

  async onSubmit(): Promise<void> {
    if (this.response.originalRequest !== this.formModel.text) {
      this.isSubmitted = true;
      this.response = {};
      await this.router.navigate(['/search', this.formModel.text]);
    }
  }


  async solveRequest(query: string) {
    this.response.originalRequest = this.formModel.text;

    this.response.output = await this.apiMathService.search(query);
  }

}
