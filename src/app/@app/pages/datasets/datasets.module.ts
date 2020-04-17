import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../@shared/shared.module';
import { DatasetsComponent } from './datasets.component';

@NgModule({
  declarations: [DatasetsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DatasetsComponent,
      },
    ]),
  ]
})
export class DatasetsModule {
}
