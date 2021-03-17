import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecognitionSyllableComponent } from './recognition-syllable.component';

describe('RecognitionSyllableComponent', () => {
  let component: RecognitionSyllableComponent;
  let fixture: ComponentFixture<RecognitionSyllableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RecognitionSyllableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecognitionSyllableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
