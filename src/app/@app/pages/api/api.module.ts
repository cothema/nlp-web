import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../@shared/shared.module';
import { ApiComponent } from './api.component';

@NgModule({
  declarations: [ApiComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ApiComponent,
      },
    ]),
  ]
})
export class ApiModule {
}
