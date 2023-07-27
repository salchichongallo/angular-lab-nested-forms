import { Component, EventEmitter, Output } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { DynamicFormComponent } from "./dynamic-form-component.interface";

@Component({
  selector: "app-demo-child-form",
  template: `
    <div [formGroup]="form" class="row g-3">
      <div class="col-6">
        <label for="address" class="form-label">Address</label>
        <input
          formControlName="address"
          id="address"
          type="text"
          class="form-control"
        />
      </div>
    </div>
  `,
})
export class ChildFormComponent implements DynamicFormComponent {
  @Output()
  readonly onFormInit = new EventEmitter<AbstractControl>();

  @Output()
  readonly onFormDestroy = new EventEmitter<AbstractControl>();

  form = new FormGroup({
    address: new FormControl("", [Validators.required]),
  });

  ngOnInit() {
    this.onFormInit.emit(this.form);
  }

  ngOnDestroy() {
    this.onFormDestroy.emit(this.form);
  }
}
