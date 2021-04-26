import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
}
