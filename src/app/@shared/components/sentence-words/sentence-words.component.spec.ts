import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceWordsComponent } from './sentence-words.component';

describe('SentenceWordsComponent', () => {
  let component: SentenceWordsComponent;
  let fixture: ComponentFixture<SentenceWordsComponent>;

  beforeEach(async(() => {
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
