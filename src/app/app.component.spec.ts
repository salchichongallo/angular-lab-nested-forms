import { CommonModule } from "@angular/common";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

test("app has a title", () => {
  TestBed.configureTestingModule({
    imports: [CommonModule],
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [AppComponent],
  });
  const app = TestBed.createComponent(AppComponent).componentInstance;
  expect(app.title).toEqual(expect.any(String));
});
