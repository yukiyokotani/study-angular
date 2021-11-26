import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input() title!: string;
  @Input() active = false;
  @Input() isCloseable = false;
  @Input() template!: TemplateRef<unknown>;
  @Input() dataContext!: Record<string, unknown>;
}
