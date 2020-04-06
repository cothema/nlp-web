import { Component, OnInit } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faUniversity } from '@fortawesome/free-solid-svg-icons/faUniversity';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  faFacebookF = faFacebookF;
  faGlobe = faGlobe;
  faUniversity = faUniversity;

  constructor() {
  }

  ngOnInit(): void {
  }

}
