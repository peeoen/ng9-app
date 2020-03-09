import { NumberService } from './services/number.service';
import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng9-app';

  constructor(private router: Router,
              public numberService: NumberService) {
    this.numberService.items.push('1');
    this.numberService.items.push('1');

    this.numberService.items.push('1');
    this.numberService.items.push('1');
  }

  lazy(num: number) {
    this.router.navigate([`/lazy/${num}`]);
  }
}
