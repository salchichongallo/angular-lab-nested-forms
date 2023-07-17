import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="container">
      <h1 class="mt-4">Welcome to {{ title }}!</h1>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = "labs-nested-forms";
}
