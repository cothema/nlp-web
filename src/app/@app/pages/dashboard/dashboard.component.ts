import { Component, OnInit } from '@angular/core';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import { faWrench } from '@fortawesome/free-solid-svg-icons/faWrench';
import { AuthService } from '../../../@shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faDatabase = faDatabase;
  faWrench = faWrench;

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  async onSignOut() {
    await this.authService.signOut();
  }
}
