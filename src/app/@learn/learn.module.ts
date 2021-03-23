import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbNavModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "../@shared/shared.module";
import { LearnMaterialFooterComponent } from "./components/learn-material-footer/learn-material-footer.component";
import { LearnMaterialHeaderComponent } from "./components/learn-material-header/learn-material-header.component";
import { LearnMaterialLearnStepsComponent } from "./components/learn-material-learn-steps/learn-material-learn-steps.component";
import { LearnMaterialLinksComponent } from "./components/learn-material-links/learn-material-links.component";
import { LearnMaterialToolbarComponent } from "./components/learn-material-toolbar/learn-material-toolbar.component";
import { RecognitionSyllableComponent } from "./components/recognition-syllable/recognition-syllable.component";
import { RecognitionVerbalTypeComponent } from "./components/recognition-verbal-type/recognition-verbal-type.component";
import { TrainSyllablesComponent } from "./components/train-syllables/train-syllables.component";
import { LearnComponent } from "./learn.component";
import { LearnPhoneticsComponent } from "./pages/learn-phonetics/learn-phonetics.component";
import { LearnSyllablesComponent } from "./pages/learn-syllables/learn-syllables.component";
import { LearnVerbalTypesComponent } from "./pages/learn-verbal-types/learn-verbal-types.component";

@NgModule({
  declarations: [
    LearnComponent, LearnVerbalTypesComponent, LearnSyllablesComponent, LearnPhoneticsComponent,
    LearnMaterialToolbarComponent, LearnMaterialHeaderComponent, LearnMaterialFooterComponent,
    LearnMaterialLearnStepsComponent, LearnMaterialLinksComponent, RecognitionSyllableComponent,
    TrainSyllablesComponent, RecognitionVerbalTypeComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: LearnComponent,
      },
      {
        path: "verbal-types",
        component: LearnVerbalTypesComponent,
      },
      {
        path: "syllables",
        component: LearnSyllablesComponent,
      },
      {
        path: "phonetics",
        component: LearnPhoneticsComponent,
      },
    ]),
    NgbNavModule,
    NgbTooltipModule,
  ]
})
export class LearnModule {
}
