import { CommonModule } from "@angular/common";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { Form2Component } from "./form2.component";

const createComponent = () => {
  TestBed.configureTestingModule({
    imports: [CommonModule, ReactiveFormsModule],
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [Form2Component],
  });
  const fixture = TestBed.createComponent(Form2Component);
  return fixture.componentInstance;
};

it("should create component", () => {
  const component = createComponent();
  expect(component).toBeDefined();
});
