import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnVerbalTypesComponent } from './learn-verbal-types.component';

describe('LearnVerbalTypesComponent', () => {
  let component: LearnVerbalTypesComponent;
  let fixture: ComponentFixture<LearnVerbalTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LearnVerbalTypesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnVerbalTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
