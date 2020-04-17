import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { IApiResponse } from '../../interfaces/i-api-response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.apiUrl;
  }

  async post<T>(
    subPath: string,
    lang: string,
    request: any
  ): Promise<IApiResponse<T>> {
    return this.http
      .post<IApiResponse<T>>(
        this.baseUrl + '/v1/' + lang + subPath,
        request
      )
      .toPromise<IApiResponse<T>>();
  }

}
