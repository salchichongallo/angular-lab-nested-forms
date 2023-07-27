import { Component, EventEmitter, Output } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { DynamicFormComponent } from "../nested-dynamic/dynamic-form-component.interface";

@Component({
  selector: "app-other-child-form",
  template: `
    <div [formGroup]="form" class="row g-3">
      <div class="col-sm">
        <label for="address" class="form-label">Address</label>
        <input
          formControlName="address"
          id="address"
          type="text"
          class="form-control"
        />
      </div>
      <div class="col-sm">
        <label for="food" class="form-label">Food Options</label>
        <select formControlName="foodOptions" id="food" class="form-select">
          <option [ngValue]="null" disabled>Select...</option>
          <option>Pizza</option>
          <option>Rice</option>
          <option>Chicken soup</option>
        </select>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input
            formControlName="formal"
            type="checkbox"
            class="form-check-input"
            id="formal"
          />
          <label for="formal" class="form-check-label">Formal</label>
        </div>
      </div>
    </div>
  `,
})
export class OtherChildFormComponent implements DynamicFormComponent {
  @Output()
  readonly onFormInit = new EventEmitter<AbstractControl>();

  @Output()
  readonly onFormDestroy = new EventEmitter<AbstractControl>();

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    address: this.fb.control("", [Validators.required]),
    formal: new FormControl(false),
    foodOptions: new FormControl(null, [Validators.required]),
  });

  ngOnInit() {
    this.onFormInit.emit(this.form);
  }

  ngOnDestroy() {
    this.onFormDestroy.emit(this.form);
  }
}
