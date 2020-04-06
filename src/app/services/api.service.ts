import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

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

  async analyzeText(text: string): Promise<any> {
    return this.http.post(
      this.baseUrl + '/analyze',
      {
        text
      }).toPromise();
  }

  async analyzeWord(word: string): Promise<any> {
    return this.http.post(
      this.baseUrl + '/analyze/word',
      {
        word
      }).toPromise();
  }
}
