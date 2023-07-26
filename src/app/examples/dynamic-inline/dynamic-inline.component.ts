import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-dynamic-inline",
  template: `
    <h2>Dynamic Inline FormGroup</h2>
    <p>Add a FormGroup to a FormArray. All in the same component.</p>
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        (change)="toggleForm()"
        id="toggle-form"
      />
      <label class="form-check-label" for="toggle-form">Form visible</label>
    </div>
    <form (ngSubmit)="submit()" [formGroup]="form" class="row g-4">
      <ng-container formArrayName="houses">
        <ng-container *ngFor="let childForm of formControls">
          <div [formGroup]="childForm" class="row g-3">
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
        </ng-container>
      </ng-container>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
      <span class="col-12">Is valid: {{ form.valid | json }}</span>
      <div class="col-12">
        <span>Value:</span>
        <pre class="d-block">{{ form.value | json }}</pre>
      </div>
    </form>
  `,
})
export class DynamicInlineComponent {
  form = new FormGroup({
    houses: new FormArray([], Validators.required),
  });

  toggleForm() {
    if (!this.isVisibleForm) {
      this.addForm();
    } else {
      this.removeForm();
    }
  }

  get isVisibleForm() {
    return !!this.houses.length;
  }

  private addForm() {
    this.houses.push(
      new FormGroup({
        address: new FormControl("", [Validators.required]),
      })
    );
  }

  private removeForm() {
    this.houses.removeAt(0, { emitEvent: true });
  }

  submit() {
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  get formControls() {
    return this.houses.controls as FormGroup[];
  }

  get houses() {
    return this.form.controls["houses"] as FormArray;
  }
}
