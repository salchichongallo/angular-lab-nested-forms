import { CommonModule } from "@angular/common";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Form1Component } from "./form1.component";

const createComponent = () => {
  TestBed.configureTestingModule({
    imports: [CommonModule],
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [Form1Component],
  });
  const fixture = TestBed.createComponent(Form1Component);
  return fixture.componentInstance;
};

it("should update the value of the input field", () => {
  const component = createComponent();
  const control = component.color;
  control.setValue("blue");
  expect(control.value).toBe("blue");
});
