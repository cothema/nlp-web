import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { StandardUrlEncoder } from '../helpers/standard-url-encoder';

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
    let params = new HttpParams({encoder: new StandardUrlEncoder()});
    params = params.append('q', query);

    return this.http
      .get<any>(
        this.baseUrl + '/v1/search',
        {
          params
        }
      )
      .toPromise<any>();
  }

}
