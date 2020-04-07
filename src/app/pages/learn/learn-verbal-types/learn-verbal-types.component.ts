import { Component, OnInit } from '@angular/core';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons/faBalanceScale';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faBrain } from '@fortawesome/free-solid-svg-icons/faBrain';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

@Component({
  selector: 'app-learn-verbal-types',
  templateUrl: './learn-verbal-types.component.html',
  styleUrls: ['./learn-verbal-types.component.scss']
})
export class LearnVerbalTypesComponent implements OnInit {
  faBrain = faBrain;
  faBook = faBook;
  faPrint = faPrint;
  faExclamationTriangle = faExclamationTriangle;
  faBalanceScale = faBalanceScale;
  faUser = faUser;
  faEdit = faEdit;
  faExternalLinkAlt = faExternalLinkAlt;

  constructor() {
  }

  ngOnInit(): void {
  }

  onPrint() {
    window.print();
  }
}
