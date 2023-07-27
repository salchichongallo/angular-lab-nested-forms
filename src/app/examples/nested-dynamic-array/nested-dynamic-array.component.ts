import { Component } from "@angular/core";
import { AbstractControl, FormArray, FormGroup } from "@angular/forms";

@Component({
  selector: "app-nested-dynamic-array-component",
  template: `
    <h2>Nested Dynamic Array</h2>
    <p>Adds/removes multiple form component.</p>
    <form (ngSubmit)="submit()" [formGroup]="form" class="row g-4">
      <div class="col-sm">
        <app-item-frame
          *ngIf="formsVisibility[0]"
          title="Form 1"
          (onDelete)="onDelete(0)"
        >
          <app-demo-child-form
            (onFormInit)="renderForm($event)"
            (onFormDestroy)="deleteForm($event)"
          ></app-demo-child-form>
        </app-item-frame>
      </div>
      <div class="col-sm">
        <app-item-frame
          *ngIf="formsVisibility[1]"
          title="Form 2"
          (onDelete)="onDelete(1)"
        >
          <app-demo-child-form
            (onFormInit)="renderForm($event)"
            (onFormDestroy)="deleteForm($event)"
          ></app-demo-child-form>
        </app-item-frame>
      </div>
      <app-item-frame
        *ngIf="formsVisibility[2]"
        title="Other Form"
        (onDelete)="onDelete(2)"
      >
        <app-other-child-form
          (onFormInit)="renderForm($event)"
          (onFormDestroy)="deleteForm($event)"
        ></app-other-child-form>
      </app-item-frame>
      <div class="col-12">
        <button [disabled]="form.invalid" type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
      <div class="col-12">
        <p>
          Status:
          <span
            class="badge text-bg-primary"
            [class]="{
              'text-bg-success': form.status === 'VALID',
              'text-bg-danger': form.status === 'INVALID'
            }"
            >{{ form.status }}</span
          >
        </p>
      </div>
      <div class="col-12">
        <span>Value:</span>
        <pre class="d-block">{{ form.value | json }}</pre>
      </div>
    </form>
  `,
})
export class NestedDynamicArrayComponent {
  formsVisibility = { 0: true, 1: true, 2: true };

  form = new FormGroup({
    bills: new FormArray([]),
  });

  renderForm(form: AbstractControl) {
    setTimeout(() => this.bills.push(form), 0);
  }

  deleteForm(_: AbstractControl) {
    this.form.removeControl("bill");
  }

  submit() {
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onDelete(formIndex: number) {
    this.bills.removeAt(formIndex);
    this.formsVisibility = { ...this.formsVisibility, [formIndex]: false };
  }

  get bills() {
    return this.form.controls["bills"] as FormArray;
  }
}
