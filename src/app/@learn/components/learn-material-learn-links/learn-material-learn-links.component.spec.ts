import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMaterialLearnLinksComponent } from './learn-material-learn-links.component';

describe('LearnMaterialLearnLinksComponent', () => {
  let component: LearnMaterialLearnLinksComponent;
  let fixture: ComponentFixture<LearnMaterialLearnLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMaterialLearnLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMaterialLearnLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
