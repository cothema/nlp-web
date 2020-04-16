import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../../@shared/shared.module";
import { DictionaryComponent } from "./dictionary.component";

@NgModule({
  declarations: [DictionaryComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: DictionaryComponent,
      },
      {
        path: ":word",
        component: DictionaryComponent,
      },
    ]),
  ]
})
export class DictionaryModule {
}
