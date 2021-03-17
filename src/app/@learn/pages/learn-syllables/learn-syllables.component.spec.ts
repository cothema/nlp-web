import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LearnSyllablesComponent } from './learn-syllables.component';

describe('LearnSyllablesComponent', () => {
  let component: LearnSyllablesComponent;
  let fixture: ComponentFixture<LearnSyllablesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LearnSyllablesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnSyllablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
