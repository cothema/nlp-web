import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { PricingComponent } from './pricing.component';

@NgModule({
  declarations: [PricingComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PricingComponent,
      },
    ]),
  ]
})
export class PricingModule {
}
