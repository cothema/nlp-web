import { Component, OnInit } from "@angular/core";
import { LearnMaterial } from "../../../@learn/model/learn-material";
import { LearnMaterialRepositoryService } from "../../../@learn/services/learn-material-repository.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  content: LearnMaterial[] = [];
  search: string;
  searchResults: LearnMaterial[] = [];

  constructor(
    private repository: LearnMaterialRepositoryService
  ) {
  }

  ngOnInit(): void {
    this.content = this.repository.content.filter(x => x.routerLink);
  }

  onSearch() {
    if (this.search.length === 0) {
      this.search = undefined;
      this.searchResults = [];
      return;
    }

    this.searchResults = this.repository.search(this.search).filter(x => x.routerLink);
  }

}
