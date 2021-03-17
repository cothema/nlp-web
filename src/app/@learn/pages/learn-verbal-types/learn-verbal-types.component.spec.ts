import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LearnVerbalTypesComponent } from './learn-verbal-types.component';

describe('LearnVerbalTypesComponent', () => {
  let component: LearnVerbalTypesComponent;
  let fixture: ComponentFixture<LearnVerbalTypesComponent>;

  beforeEach(waitForAsync(() => {
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
