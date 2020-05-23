import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiMathService {

  private baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.mathApiUrl;
  }

  async search(
    query: string
  ): Promise<any> {
    return this.http
      .get<any>(
        this.baseUrl + '/v1/search?q=',
        {
          params: {
            q: query
          }
        }
      )
      .toPromise<any>();
  }

}
