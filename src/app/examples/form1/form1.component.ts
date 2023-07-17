import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-form-1",
  template: `
    <form [formGroup]="appForm" (submit)="submit()">
      <div>
        <div>
          Favorite Color:
          <input required formControlName="favoriteColor" type="text" />
        </div>
      </div>
      <button type="submit" style="margin-top: 2rem;">Submit</button>
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
    JSON.stringify(this.appForm.value, null, 2);
  }
}
