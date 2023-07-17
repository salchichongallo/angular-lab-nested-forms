import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { Form1Component } from "./examples/form1/form1.component";

@NgModule({
  declarations: [AppComponent, Form1Component],
  imports: [
    RouterModule.forRoot([
      {
        path: "1",
        pathMatch: "full",
        component: Form1Component,
      },
      {
        path: "**",
        redirectTo: "1",
      },
    ]),
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
