import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinesListComponent } from './wines-list.component';

describe('WinesListComponent', () => {
  let component: WinesListComponent;
  let fixture: ComponentFixture<WinesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
