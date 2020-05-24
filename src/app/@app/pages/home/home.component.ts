import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { ApiMathService } from '../../../@shared/services/api-math.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  formModel = {
    text: '',
  };
  isSubmitted = false;
  response: {
    originalRequest?: string,
    output?: string
  } = {};
  @ViewChild('searchField') searchField: ElementRef;
  devMode = false;

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

  ngAfterViewInit() {
    // Server side search
    fromEvent(this.searchField.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(1000),
        distinctUntilChanged(),
        tap((text) => {
          this.solveRequest(this.searchField.nativeElement.value);
        })
      )
      .subscribe();
  }

  async onSubmit(): Promise<void> {
    this.isSubmitted = true;
    this.response = {};
    if (this.response.originalRequest !== this.formModel.text) {
      await this.router.navigate(['/search', this.formModel.text]);
    } else {
      this.solveRequest(this.formModel.text);
    }
  }

  async solveRequest(query: string) {
    this.response = {};
    this.response.originalRequest = this.formModel.text;
    this.response.output = await this.apiMathService.search(query);
  }

}
