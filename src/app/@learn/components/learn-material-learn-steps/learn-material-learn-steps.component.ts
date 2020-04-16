import { Component, Input, OnInit } from "@angular/core";
import { faBrain } from "@fortawesome/free-solid-svg-icons/faBrain";
import { LearnMaterial } from "../../model/learn-material";

@Component({
  selector: "app-learn-material-learn-steps",
  templateUrl: "./learn-material-learn-steps.component.html",
  styleUrls: ["./learn-material-learn-steps.component.scss"]
})
export class LearnMaterialLearnStepsComponent implements OnInit {

  @Input() material: LearnMaterial;
  faBrain = faBrain;

  constructor() {
  }

  ngOnInit(): void {
  }

}
