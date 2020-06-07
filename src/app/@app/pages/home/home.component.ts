import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
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
  faExclamationTriangle = faExclamationTriangle;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiMathService: ApiMathService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.query) {
        this.solveRequest(params.query);
      }
    });
  }

  ngAfterViewInit() {
    this.searchField.nativeElement.focus();

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
    this.solveRequest(this.formModel.text);
  }

  async solveRequest(query: string) {
    this.isSubmitted = true;
    this.response = {};
    this.formModel.text = query;

    this.router.navigate(['/search', query], {
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });

    this.response = {};
    this.response.originalRequest = this.formModel.text;
    this.response.output = await this.apiMathService.search(query);
  }

  onSearch(query: string): void {
    this.searchField.nativeElement.focus();
    this.solveRequest(query);
  }
}
