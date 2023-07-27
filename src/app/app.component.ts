import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">{{ title }}</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a routerLink="/1" class="nav-link" routerLinkActive="active"
                >Simplest</a
              >
            </li>
            <li class="nav-item">
              <a routerLink="/2" class="nav-link" routerLinkActive="active"
                >Party planner</a
              >
            </li>
            <li class="nav-item">
              <a routerLink="/3" class="nav-link" routerLinkActive="active"
                >Dynamic Inline</a
              >
            </li>
            <li class="nav-item">
              <a routerLink="/4" class="nav-link" routerLinkActive="active"
                >Nested Dynamic</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <h1 class="mt-4">Welcome to {{ title }}!</h1>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = "LabsNestedForms";
}
