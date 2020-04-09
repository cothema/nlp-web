import { Component, Input, OnInit } from '@angular/core';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons/faBalanceScale';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { LearnMaterial } from '../../model/learn-material';

@Component({
  selector: 'app-learn-material-footer',
  templateUrl: './learn-material-footer.component.html',
  styleUrls: ['./learn-material-footer.component.scss']
})
export class LearnMaterialFooterComponent implements OnInit {

  @Input() material: LearnMaterial;
  faBalanceScale = faBalanceScale;
  faUser = faUser;

  constructor() {
  }

  ngOnInit(): void {
  }

}
