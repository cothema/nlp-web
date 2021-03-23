import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../@shared/shared.module';
import { LicensesComponent } from './licenses.component';

@NgModule({
  declarations: [LicensesComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LicensesComponent,
      },
    ]),
    NgbNavModule,
  ]
})
export class LicensesModule {
}
