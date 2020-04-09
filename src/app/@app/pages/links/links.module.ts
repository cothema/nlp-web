import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../@shared/shared.module';
import { LinksComponent } from './links.component';

@NgModule({
  declarations: [LinksComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LinksComponent,
      },
    ]),
  ]
})
export class LinksModule {
}
