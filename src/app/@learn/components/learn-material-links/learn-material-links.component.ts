import { Component, Input, OnInit } from "@angular/core";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";
import { LearnMaterial } from "../../model/learn-material";

@Component({
  selector: "app-learn-material-links",
  templateUrl: "./learn-material-links.component.html",
  styleUrls: ["./learn-material-links.component.scss"]
})
export class LearnMaterialLinksComponent implements OnInit {

  @Input() material: LearnMaterial;
  faExternalLinkAlt = faExternalLinkAlt;

  constructor() {
  }

  ngOnInit(): void {
  }

}
