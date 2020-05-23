import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../@shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { StorageComponent } from './storage/storage.component';
import { StructuresComponent } from './structures/structures.component';

@NgModule({
  declarations: [DashboardComponent, StructuresComponent, StorageComponent, SettingsComponent],
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
      },
      {
        path: 'structures',
        component: StructuresComponent,
      },
      {
        path: 'structures',
        component: StructuresComponent,
      },
    ]),
  ],
})
export class DashboardModule {
}
