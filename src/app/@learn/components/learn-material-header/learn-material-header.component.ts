import { Component, Input, OnInit } from "@angular/core";
import { LearnMaterial } from "../../model/learn-material";

@Component({
  selector: "app-learn-material-header",
  templateUrl: "./learn-material-header.component.html",
  styleUrls: ["./learn-material-header.component.scss"]
})
export class LearnMaterialHeaderComponent implements OnInit {

  @Input() material: LearnMaterial;

  constructor() { }

  ngOnInit(): void {
  }

}
