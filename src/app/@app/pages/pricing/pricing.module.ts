import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "../../../@shared/shared.module";
import { PricingComponent } from "./pricing.component";

@NgModule({
  declarations: [PricingComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: PricingComponent,
      },
    ]),
    NgbNavModule,
  ]
})
export class PricingModule {
}
