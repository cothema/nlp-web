import { Component, OnInit } from '@angular/core';
import { FeatureLevelService } from '../../../../@shared/services/feature-level.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    public featureLevelService: FeatureLevelService,
  ) {

  }

  ngOnInit(): void {
  }

  onFeatureLevelChanged(event): void {
    this.featureLevelService.currentLevel = parseInt(event.target.value, 10);
  }
}
