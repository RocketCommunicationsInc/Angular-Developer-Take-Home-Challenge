import {ComponentFixture, TestBed} from "@angular/core/testing";

import {AlertButtonComponent} from "./alert-button.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("AlertButtonComponent", () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AlertButtonComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
