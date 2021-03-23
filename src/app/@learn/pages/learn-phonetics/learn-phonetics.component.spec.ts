import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LearnPhoneticsComponent } from './learn-phonetics.component';

describe('LearnSyllablesComponent', () => {
  let component: LearnPhoneticsComponent;
  let fixture: ComponentFixture<LearnPhoneticsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LearnPhoneticsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnPhoneticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
