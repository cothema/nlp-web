import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.scss']
})
export class StructuresComponent implements OnInit {
  faPlus = faPlus;
  faInfoCircle = faInfoCircle;

  constructor() {
  }

  ngOnInit(): void {
  }

}
