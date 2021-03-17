import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrainSyllablesComponent } from './train-syllables.component';

describe('TrainSyllablesComponent', () => {
  let component: TrainSyllablesComponent;
  let fixture: ComponentFixture<TrainSyllablesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TrainSyllablesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainSyllablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
