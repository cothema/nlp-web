import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SentencesComponent } from './sentences.component';

describe('SentencesComponent', () => {
  let component: SentencesComponent;
  let fixture: ComponentFixture<SentencesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SentencesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
