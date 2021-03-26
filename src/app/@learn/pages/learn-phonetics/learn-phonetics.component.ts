import { Component, OnInit } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { LearnMaterial } from '../../model/learn-material';
import { LearnMaterialRepositoryService } from '../../services/learn-material-repository.service';

@Component({
  selector: 'app-learn-phonetics',
  templateUrl: './learn-phonetics.component.html',
  styleUrls: ['./learn-phonetics.component.scss']
})
export class LearnPhoneticsComponent implements OnInit {
  faBook = faBook;
  learnMaterial: LearnMaterial;
  activeTab: string;

  constructor(
    private repository: LearnMaterialRepositoryService,
  ) {
  }

  ngOnInit(): void {
    this.learnMaterial = this.repository.findOneBy({routerLink: 'phonetics'});
  }

}
