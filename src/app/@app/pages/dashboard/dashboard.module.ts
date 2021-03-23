import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../@shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [DashboardComponent, SettingsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      }
    ]),
  ],
})
export class DashboardModule {
}
