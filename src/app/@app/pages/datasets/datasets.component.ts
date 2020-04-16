import { Component, OnInit } from "@angular/core";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

@Component({
  selector: "app-data-sets",
  templateUrl: "./datasets.component.html",
  styleUrls: ["./datasets.component.scss"]
})
export class DatasetsComponent implements OnInit {
  faDownload = faDownload;
  faSearch = faSearch;
  datasets: {
    title: string;
    body: string;
    license: string;
  }[] = [];
  faExclamationTriangle = faExclamationTriangle;

  constructor() {
  }

  ngOnInit(): void {
    this.datasets.push(
      {
        title: "Česká slova",
        body: "Kompletní databáze českých slov využitelná například pro kontrolu pravopisu.",
        license: "na vyžádání"
      }
    );
    this.datasets.push(
      {
        title: "Česká slova dle slovních druhů",
        body: "Určené slovní druhy pro jednotlivá česká slova",
        license: "MIT"
      }
    );
    this.datasets.push(
      {
        title: "Česká podstatná jména se specifikací",
        body: "Podstatná jména s určených rodem, životností, číslem, pádem a vzorem",
        license: "MIT"
      }
    );
  }

}
