import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../../@shared/shared.module";
import { DashboardComponent } from "./dashboard.component";
import { StorageComponent } from "./storage/storage.component";
import { StructuresComponent } from "./structures/structures.component";

@NgModule({
  declarations: [DashboardComponent, StructuresComponent, StorageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "storage",
        component: StorageComponent,
      },
      {
        path: "structures",
        component: StructuresComponent,
      },
    ]),
  ],
})
export class DashboardModule {
}
