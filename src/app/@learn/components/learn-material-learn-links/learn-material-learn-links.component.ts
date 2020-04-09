import { Component, Input, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import { LearnMaterial } from '../../model/learn-material';

@Component({
  selector: 'app-learn-material-learn-links',
  templateUrl: './learn-material-learn-links.component.html',
  styleUrls: ['./learn-material-learn-links.component.scss']
})
export class LearnMaterialLearnLinksComponent implements OnInit {

  @Input() material: LearnMaterial;
  faExternalLinkAlt = faExternalLinkAlt;

  constructor() {
  }

  ngOnInit(): void {
  }

}
