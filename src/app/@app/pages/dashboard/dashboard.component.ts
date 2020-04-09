import { Component, OnInit } from '@angular/core';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import { faWrench } from '@fortawesome/free-solid-svg-icons/faWrench';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faDatabase = faDatabase;
  faWrench = faWrench;

  constructor() {
  }

  ngOnInit(): void {
  }

}
