import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../../@shared/shared.module";
import { TermsComponent } from "./terms.component";

@NgModule({
  declarations: [TermsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: TermsComponent,
      },
    ]),
  ]
})
export class TermsModule {
}
