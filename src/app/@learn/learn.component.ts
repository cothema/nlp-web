import { Component, OnInit } from '@angular/core';
import { LearnMaterial } from './model/learn-material';
import { LearnMaterialByClass } from './model/learn-material-by-class';
import { LearnMaterialRepositoryService } from './services/learn-material-repository.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {

  content: LearnMaterial[] = [];
  contentByClasses: LearnMaterialByClass[] = [];
  search: string;
  searchResults: LearnMaterial[] = [];

  constructor(
    private repository: LearnMaterialRepositoryService
  ) {
  }

  ngOnInit(): void {
    this.contentByClasses = this.repository.findContentByClasses();
  }

  onSearch() {
    if (this.search.length === 0) {
      this.search = undefined;
      this.searchResults = [];
      return;
    }

    this.searchResults = this.repository.search(this.search);
  }

}
