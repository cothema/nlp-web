import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMaterialToolbarComponent } from './learn-material-toolbar.component';

describe('LearnMaterialToolbarComponent', () => {
  let component: LearnMaterialToolbarComponent;
  let fixture: ComponentFixture<LearnMaterialToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LearnMaterialToolbarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMaterialToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
