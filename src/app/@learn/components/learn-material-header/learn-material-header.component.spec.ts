import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LearnMaterialHeaderComponent } from './learn-material-header.component';

describe('LearnMaterialHeaderComponent', () => {
  let component: LearnMaterialHeaderComponent;
  let fixture: ComponentFixture<LearnMaterialHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LearnMaterialHeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMaterialHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
