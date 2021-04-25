import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineFormComponent } from './wine-form.component';

describe('WineFormComponent', () => {
  let component: WineFormComponent;
  let fixture: ComponentFixture<WineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
