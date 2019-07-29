import {Directive, ElementRef} from '@angular/core';
import {NgControl} from "@angular/forms";

@Directive({
  selector: '[appIsInvalid]'
})
export class IsInvalidDirective {

  constructor(
      private element: ElementRef,
      private control: NgControl
  ) { }

  ngOnInit() {
    this.control.valueChanges.subscribe(() => {
      const nativeElement: HTMLElement = this.element.nativeElement;
      if (!nativeElement.classList.contains('is-invalid')) {
        nativeElement.classList.add('is-invalid');
      } else {
        nativeElement.classList.remove('is-invalid');
      }
    });
  }
}
