import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { Form1Component } from "./examples/form1/form1.component";
import { Form2Component } from "./examples/form2/form2.component";
import { DynamicInlineComponent } from "./examples/dynamic-inline/dynamic-inline.component";
import { NestedDynamicComponent } from "./examples/nested-dynamic/nested-dynamic.component";
import { ChildFormComponent } from "./examples/nested-dynamic/child-form.component";
import { NestedDynamicArrayComponent } from "./examples/nested-dynamic-array/nested-dynamic-array.component";
import { ItemFrameComponent } from "./examples/nested-dynamic-array/item-frame/item-frame.component";
import { OtherChildFormComponent } from "./examples/nested-dynamic-array/other-child-form.component";

const forms = [
  Form1Component,
  Form2Component,
  DynamicInlineComponent,
  NestedDynamicComponent,
  NestedDynamicArrayComponent,
];

const components: any[] = [ChildFormComponent, OtherChildFormComponent];

@NgModule({
  declarations: [AppComponent, ...components, ...forms, ItemFrameComponent],
  imports: [
    RouterModule.forRoot(
      [
        ...forms.map((component, index) => ({
          path: String(index + 1),
          pathMatch: "full",
          component,
        })),
        {
          path: "**",
          redirectTo: "1",
        },
      ],
      { useHash: true }
    ),
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
