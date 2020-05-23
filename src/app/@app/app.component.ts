import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { TranslateService } from '@ngx-translate/core';
import { Gtag } from 'angular-gtag';
import { AuthService } from '../@shared/services/auth.service';
import { FeatureLevelService } from '../@shared/services/feature-level.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faGithub = faGithub;
  faDollarSign = faDollarSign;
  faUser = faUser;
  lang = 'cs';

  constructor(
    private translate: TranslateService,
    gtag: Gtag, // Do not remove! Pageviews does not work without it.
    public authService: AuthService,
    public featureLevelService: FeatureLevelService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(this.lang);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    if (translate.getBrowserLang()) {
      translate.use(translate.getBrowserLang());
    } else {
      translate.use(this.lang);
    }
  }

  ngOnInit() {
    const langInStorage = localStorage.getItem('app.lang');

    if (langInStorage && langInStorage.length) {
      this.lang = langInStorage;
      this.translate.use(this.lang);
    }
  }

  onChangeLang() {
    this.translate.use(this.lang);
    localStorage.setItem('app.lang', this.lang);
  }
}
