import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SentenceWordsComponent } from './sentence-words.component';

describe('SentenceWordsComponent', () => {
  let component: SentenceWordsComponent;
  let fixture: ComponentFixture<SentenceWordsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SentenceWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
