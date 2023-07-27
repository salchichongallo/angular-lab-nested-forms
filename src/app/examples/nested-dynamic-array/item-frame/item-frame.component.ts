import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-item-frame",
  template: `
    <section class="card">
      <header
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h3 class="h4">{{ title }}</h3>
        <button
          (click)="onDeleteClick()"
          type="button"
          class="btn btn-outline-danger"
        >
          Delete
        </button>
      </header>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </section>
  `,
})
export class ItemFrameComponent {
  @Input() title!: string;

  @Output() onDelete = new EventEmitter<void>();

  onDeleteClick() {
    this.onDelete.emit();
  }
}
