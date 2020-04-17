import { Component, OnInit } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { LearnMaterial } from '../../model/learn-material';
import { LearnMaterialRepositoryService } from '../../services/learn-material-repository.service';

@Component({
  selector: 'app-learn-syllables',
  templateUrl: './learn-syllables.component.html',
  styleUrls: ['./learn-syllables.component.scss']
})
export class LearnSyllablesComponent implements OnInit {
  faBook = faBook;
  learnMaterial: LearnMaterial;
  activeTab: string;

  constructor(
    private repository: LearnMaterialRepositoryService,
  ) {
  }

  ngOnInit(): void {
    this.learnMaterial = this.repository.findOneBy({routerLink: 'syllables'});
  }

}
