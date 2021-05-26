import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  private elements?: HTMLElement;

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  ngOnInit() {
    console.log(this.elementRef);
  }

  private highlight(color: string | null) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
