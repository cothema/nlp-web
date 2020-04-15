import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMaterialLinksComponent } from './learn-material-links.component';

describe('LearnMaterialLinksComponent', () => {
  let component: LearnMaterialLinksComponent;
  let fixture: ComponentFixture<LearnMaterialLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMaterialLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMaterialLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
