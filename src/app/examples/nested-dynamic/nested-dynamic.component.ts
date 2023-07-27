import { Component } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-nested-dynamic",
  template: `
    <h2>Nested Dynamic</h2>
    <p>Adds/removes a form component to a parent FormGroup.</p>
    <div class="form-check form-switch mb-4">
      <input
        (change)="toggleForm()"
        [checked]="isFormVisible"
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="toggle-form"
      />
      <label class="form-check-label" for="toggle-form">Form visible</label>
    </div>
    <form (ngSubmit)="submit()" [formGroup]="form" class="row g-4">
      <app-demo-child-form
        *ngIf="isFormVisible"
        (onFormInit)="renderForm($event)"
        (onFormDestroy)="deleteForm($event)"
      ></app-demo-child-form>
      <div class="col-12">
        <button [disabled]="form.invalid" type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
      <span class="col-12">Status: {{ form.status | json }}</span>
      <div class="col-12">
        <span>Value:</span>
        <pre class="d-block">{{ form.value | json }}</pre>
      </div>
    </form>
  `,
})
export class NestedDynamicComponent {
  form = new FormGroup({});

  isFormVisible = true;

  renderForm(form: AbstractControl) {
    setTimeout(() => this.form.addControl("bill", form), 0);
  }

  deleteForm(_: AbstractControl) {
    this.form.removeControl("bill");
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  submit() {
    console.log(JSON.stringify(this.form.value, null, 2));
  }
}
