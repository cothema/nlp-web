import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';

@Component({
  selector: 'app-learn-material-toolbar',
  templateUrl: './learn-material-toolbar.component.html',
  styleUrls: ['./learn-material-toolbar.component.scss']
})
export class LearnMaterialToolbarComponent implements OnInit {
  faPrint = faPrint;
  faExclamationTriangle = faExclamationTriangle;
  faEdit = faEdit;

  constructor() {
  }

  ngOnInit(): void {
  }

  onPrint() {
    window.print();
  }

}
