import { Component, OnInit } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { LearnMaterial } from '../../model/learn-material';
import { LearnMaterialRepositoryService } from '../../services/learn-material-repository.service';

@Component({
  selector: 'app-learn-verbal-types',
  templateUrl: './learn-verbal-types.component.html',
  styleUrls: ['./learn-verbal-types.component.scss']
})
export class LearnVerbalTypesComponent implements OnInit {
  faBook = faBook;
  learnMaterial: LearnMaterial;
  activeTab: string;

  constructor(
    private repository: LearnMaterialRepositoryService
  ) {
  }

  ngOnInit(): void {
    this.learnMaterial = this.repository.findOneBy({routerLink: 'verbal-types'});
  }
}
