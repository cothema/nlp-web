import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { NgxJsonViewerModule } from "ngx-json-viewer";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { SyllableComponent } from "./syllable/syllable.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    FontAwesomeModule,
    NgxJsonViewerModule,
    NgbTooltipModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    FontAwesomeModule,
    NgxJsonViewerModule,
    SpinnerComponent,
    SyllableComponent,
    NgbTooltipModule,
  ],
  entryComponents: [],
  providers: [],
  declarations: [SpinnerComponent, SyllableComponent],
})
export class SharedModule {
}
