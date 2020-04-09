import { Component, OnInit } from '@angular/core';
import { faAtom } from '@fortawesome/free-solid-svg-icons/faAtom';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faSchool } from '@fortawesome/free-solid-svg-icons/faSchool';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faDollarSign = faDollarSign;
  faAtom = faAtom;
  faSchool = faSchool;
  faBook = faBook;
  faDatabase = faDatabase;
  faHeart = faHeart;
  faSearch = faSearch;

  constructor() {
  }

  ngOnInit(): void {
  }

}
