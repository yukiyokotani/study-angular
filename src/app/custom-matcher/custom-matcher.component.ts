import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './custom-matcher.component.html',
  styleUrls: ['./custom-matcher.component.css'],
})
export class CustomMatcherComponent implements OnInit {
  rest$ = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('rest'))
  );

  sampleUrl = environment.host + '/custom-matcher/restparam';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
