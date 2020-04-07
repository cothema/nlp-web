import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared.module';
import { LearnVerbalTypesComponent } from './learn-verbal-types/learn-verbal-types.component';
import { LearnComponent } from './learn.component';

@NgModule({
  declarations: [LearnComponent, LearnVerbalTypesComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LearnComponent,
      },
      {
        path: 'verbal-types',
        component: LearnVerbalTypesComponent,
      },
    ]),
    NgbNavModule,
  ]
})
export class LearnModule {
}
