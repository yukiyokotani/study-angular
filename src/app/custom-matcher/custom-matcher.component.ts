import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, ParamMap, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './custom-matcher.component.html',
  styleUrls: ['./custom-matcher.component.css'],
})
export class CustomMatcherComponent implements OnInit {
  rest$?: Observable<string | null>;
  message$?: Observable<string>;
  component$?: Observable<any>;

  sampleUrl = environment.host + '/custom-matcher/restparam';

  constructor(
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.rest$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('rest'))
    );
    this.message$ = this.route.data.pipe(map((data: Data) => data.message));
    this.component$ = this.route.data.pipe(map((data: Data) => data.component));
  }

  ngOnInit(): void {
    this.component$?.subscribe((component) => console.log(component));
  }
}
