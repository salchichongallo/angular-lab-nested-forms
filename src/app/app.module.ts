import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { Form1Component } from "./examples/form1/form1.component";
import { Form2Component } from "./examples/form2/form2.component";
import { DynamicInlineComponent } from "./examples/dynamic-inline/dynamic-inline.component";

const forms = [Form1Component, Form2Component, DynamicInlineComponent];

@NgModule({
  declarations: [AppComponent, ...forms],
  imports: [
    RouterModule.forRoot([
      ...forms.map((component, index) => ({
        path: String(index + 1),
        pathMatch: "full",
        component,
      })),
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
