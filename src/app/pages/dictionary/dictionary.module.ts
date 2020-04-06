import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { DictionaryComponent } from './dictionary.component';

@NgModule({
  declarations: [DictionaryComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DictionaryComponent,
      },
    ]),
  ]
})
export class DictionaryModule {
}
