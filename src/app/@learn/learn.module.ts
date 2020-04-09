import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../@shared/shared.module';
import { LearnComponent } from './learn.component';
import { LearnVerbalTypesComponent } from './pages/learn-verbal-types/learn-verbal-types.component';
import { LearnSyllablesComponent } from './pages/learn-syllables/learn-syllables.component';
import { LearnMaterialToolbarComponent } from './components/learn-material-toolbar/learn-material-toolbar.component';
import { LearnMaterialHeaderComponent } from './components/learn-material-header/learn-material-header.component';
import { LearnMaterialFooterComponent } from './components/learn-material-footer/learn-material-footer.component';
import { LearnMaterialLearnStepsComponent } from './components/learn-material-learn-steps/learn-material-learn-steps.component';
import { LearnMaterialLearnLinksComponent } from './components/learn-material-learn-links/learn-material-learn-links.component';

@NgModule({
  declarations: [LearnComponent, LearnVerbalTypesComponent, LearnSyllablesComponent, LearnMaterialToolbarComponent, LearnMaterialHeaderComponent, LearnMaterialFooterComponent, LearnMaterialLearnStepsComponent, LearnMaterialLearnLinksComponent],
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
      {
        path: 'syllables',
        component: LearnSyllablesComponent,
      },
    ]),
    NgbNavModule,
  ]
})
export class LearnModule {
}
