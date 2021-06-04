import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') highlightColor!: string;

  private elements?: HTMLElement;

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
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
