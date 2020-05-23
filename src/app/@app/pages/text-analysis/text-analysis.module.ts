import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../@shared/shared.module';
import { HomeComponent } from '../home/home.component';
import { TextAnalysisComponent } from './text-analysis.component';


@NgModule({
  declarations: [TextAnalysisComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ]
})
export class TextAnalysisModule {
}
