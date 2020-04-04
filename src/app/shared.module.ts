import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    FontAwesomeModule,
    NgxJsonViewerModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    FontAwesomeModule,
    NgxJsonViewerModule,
  ],
  entryComponents: [],
  providers: [],
  declarations: [],
})
export class SharedModule {
}
