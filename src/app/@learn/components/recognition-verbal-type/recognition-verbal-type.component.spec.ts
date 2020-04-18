import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognitionVerbalTypeComponent } from './recognition-verbal-type.component';

describe('RecognitionVerbalTypeComponent', () => {
  let component: RecognitionVerbalTypeComponent;
  let fixture: ComponentFixture<RecognitionVerbalTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecognitionVerbalTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecognitionVerbalTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
