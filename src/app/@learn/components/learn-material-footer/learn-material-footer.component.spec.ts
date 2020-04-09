import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMaterialFooterComponent } from './learn-material-footer.component';

describe('LearnMaterialFooterComponent', () => {
  let component: LearnMaterialFooterComponent;
  let fixture: ComponentFixture<LearnMaterialFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMaterialFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMaterialFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
