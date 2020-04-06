import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { LearnComponent } from './learn.component';

@NgModule({
  declarations: [LearnComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LearnComponent,
      },
    ]),
  ]
})
export class LearnModule {
}
