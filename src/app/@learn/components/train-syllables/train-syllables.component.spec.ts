import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TrainSyllablesComponent } from "./train-syllables.component";

describe("TrainSyllablesComponent", () => {
  let component: TrainSyllablesComponent;
  let fixture: ComponentFixture<TrainSyllablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainSyllablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainSyllablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
