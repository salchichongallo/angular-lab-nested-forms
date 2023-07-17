import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-form-1",
  template: `
    <form [formGroup]="appForm" (submit)="submit()">
      <div class="mb-3">
        <label class="form-label" for="favoriteColor">Favorite Color:</label>
        <input
          required
          formControlName="favoriteColor"
          type="text"
          class="form-control"
          id="favoriteColor"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <pre class="mt-3 d-block">{{ appForm.value | json }}</pre>
    </form>
  `,
})
export class Form1Component {
  appForm = new FormGroup({
    favoriteColor: new FormControl(null),
  });

  get color() {
    return this.appForm.get("favoriteColor")!;
  }

  submit() {
    alert(JSON.stringify(this.appForm.value, null, 2));
  }
}
