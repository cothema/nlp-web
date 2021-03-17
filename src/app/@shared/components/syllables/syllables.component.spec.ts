import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SyllablesComponent } from './syllables.component';

describe('SyllableComponent', () => {
  let component: SyllablesComponent;
  let fixture: ComponentFixture<SyllablesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SyllablesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
