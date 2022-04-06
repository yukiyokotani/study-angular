import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-routing-tab',
  templateUrl: './routing-tab.component.html',
  styleUrls: ['./routing-tab.component.scss'],
})
export class RoutingTabComponent implements OnInit, OnDestroy {
  public selectedIndex = 0;
  private subscription?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.route.queryParams.subscribe((params) => {
      this.selectedIndex = params.selectedIndex;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  selectedIndexChange(selectedIndex: number): void {
    console.log(selectedIndex);
    this.router.navigate([], {
      queryParams: { selectedIndex },
    });
    this.selectedIndex = selectedIndex;
  }
}
