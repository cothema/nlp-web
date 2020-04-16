import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LearnMaterialLearnStepsComponent } from "./learn-material-learn-steps.component";

describe("LearnMaterialLearnStepsComponent", () => {
  let component: LearnMaterialLearnStepsComponent;
  let fixture: ComponentFixture<LearnMaterialLearnStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMaterialLearnStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMaterialLearnStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
