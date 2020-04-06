import { Component, OnInit } from '@angular/core';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons/faBalanceScale';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  faBalanceScale = faBalanceScale;
  faDollarSign = faDollarSign;

  constructor() {
  }

  ngOnInit(): void {
  }

}
