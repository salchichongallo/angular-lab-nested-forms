import { AbstractControl } from "@angular/forms";
import { EventEmitter, OnDestroy, OnInit } from "@angular/core";

/**
 * Represents a component with a form that can
 * be dynamically registered by its parent.
 * Should be used with Angular's lifecycle hooks.
 */
export interface DynamicFormComponent extends OnInit, OnDestroy {
  onFormInit: EventEmitter<AbstractControl>;
  onFormDestroy: EventEmitter<AbstractControl>;
}
