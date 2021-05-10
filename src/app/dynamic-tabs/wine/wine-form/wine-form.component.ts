import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export type Wine = {
  id: number;
  name: string;
  farm: string;
  vintage: string;
  size: number;
  price: number;
};

@Component({
  selector: 'app-wine-form',
  templateUrl: './wine-form.component.html',
  styleUrls: ['./wine-form.component.css'],
})
export class WineFormComponent implements OnInit {
  @Input() wine?: Wine;
  @Output() saveWine = new EventEmitter<Wine>();

  wineForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.wineForm = this.fb.group({
      id: '',
      name: '',
      farm: '',
      vintage: '',
      size: '',
      price: '',
    });
  }

  ngOnInit() {
    this.wineForm.setValue({
      id: this.wine?.id || -1,
      name: this.wine?.name || '',
      farm: this.wine?.farm || '',
      vintage: this.wine?.vintage || '',
      size: this.wine?.size || '',
      price: this.wine?.price || '',
    });
  }

  onWineFormSubmit() {
    const dataModel = this.wineForm.value;
    this.saveWine.emit(dataModel);
  }
}
