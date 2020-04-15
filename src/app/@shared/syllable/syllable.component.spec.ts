import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllableComponent } from './syllable.component';

describe('SyllableComponent', () => {
  let component: SyllableComponent;
  let fixture: ComponentFixture<SyllableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
