import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";

type Party = {
  house: number;
  street: string;
  hour: string;
  formal: boolean;
  foodOptions: string;
};

@Component({
  selector: "app-form-2",
  template: `
    <h2>Party Planner</h2>
    <p>Basic form trying out different input types.</p>
    <form [formGroup]="partyForm" (submit)="submitParty()" class="row g-3">
      <div class="col-6">
        <label for="house" class="form-label">House</label>
        <input
          formControlName="house"
          id="house"
          type="number"
          class="form-control"
        />
      </div>
      <div class="col-6">
        <label for="street" class="form-label">Street</label>
        <input
          formControlName="street"
          id="street"
          type="text"
          class="form-control"
        />
      </div>
      <div class="col-12">
        <div class="form-check form-check-inline">
          <input
            formControlName="hour"
            type="radio"
            id="hour-8"
            name="hour"
            value="08:00 AM"
            class="form-check-input"
          />
          <label for="hour-8" class="form-check-label">8:00 AM</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            formControlName="hour"
            type="radio"
            id="hour-1830"
            name="hour"
            value="06:30 PM"
            class="form-check-input"
          />
          <label for="hour-1830" class="form-check-label">6:30 PM</label>
        </div>
      </div>
      <div class="col-12">
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
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
      <div class="col-12">
        <pre class="d-block">{{ partyForm.value | json }}</pre>
      </div>
    </form>
  `,
})
export class Form2Component {
  constructor(private fb: FormBuilder) {}

  partyForm = new FormGroup({
    house: new FormControl(),
    street: new FormControl(""),
    hour: new FormControl(""),
    formal: new FormControl(false),
    foodOptions: new FormControl(null),
  });

  submitParty() {
    const party: Party = this.partyForm.value;
    alert(JSON.stringify(party, null, 2));
  }
}
