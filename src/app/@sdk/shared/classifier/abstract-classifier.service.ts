import { ApiService } from '../services/api.service';

export abstract class AbstractClassifierService<T> {

  protected abstract apiSubPath: string;

  protected constructor(
    protected apiService: ApiService,
  ) {
  }

  async classify(
    input: string,
    lang: string = 'cs',
  ): Promise<T> {
    const res = await this.apiService.post<T>(
      this.apiSubPath + '/classify',
      lang,
      {string: input},
    );

    return res.data;
  }

}
